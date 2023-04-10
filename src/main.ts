import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

async function main() {
    try {
        const token = getInput("token");
        const tag = getInput("tag");
        const message = getInput("message") || tag;

        const octokit = getOctokit(token);
        const owner = context.repo.owner;
        const repo = context.repo.repo;

        const createTagResponse = await octokit.rest.git.createTag({
            owner,
            repo,
            tag,
            message,
            object: process.env.GITHUB_SHA!,
            type: "commit",
            tagger: {
                name: "github-actions[bot]",
                email: "41898282+github-actions[bot]@users.noreply.github.com",
            },
        });

        await octokit.rest.git.createRef({
            owner,
            repo,
            sha: createTagResponse.data.sha,
            ref: "refs/tags/" + createTagResponse.data.tag,
        });
    } catch (err) {
        if (err instanceof Error) setFailed(err);
    }
}

main();
