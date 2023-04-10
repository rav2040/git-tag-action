import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

async function main() {
    try {
        console.log(process.env);

        // const token = getInput("token");
        // const tag = getInput("tag");
        // const message = getInput("message") || tag;

        // const octokit = getOctokit(token);

        // const createTagResponse = await octokit.rest.git.createTag({
        //     owner: context.repo.owner,
        //     repo: context.repo.repo,
        //     object: context.,
        //     tag,
        //     message,
        //     type: "commit",
        //     tagger: {
        //         name: "github-actions[bot]",
        //         email: "41898282+github-actions[bot]@users.noreply.github.com",
        //     },
        // });

        // await octokit.rest.git.createRef({
        //     owner: context.repo.owner,
        //     repo: context.repo.repo,
        //     sha: createTagResponse.data.sha,
        //     ref: "refs/tags/" + createTagResponse.data.tag,
        // });
    } catch (err) {
        if (err instanceof Error) setFailed(err);
    }
}

main();
