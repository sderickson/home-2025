<template>
    <div>
        <p>
            So, I've settled on a consistent pattern for each product feature:

        </p>

        <ol class="mt-4">
            <li>
                Generate and review a spec
            </li>
            <li>
                Generate and review a checklist
            </li>
            <li>
                Do one task at a time in the checklist, with unit/integration tests
            </li>
            <li>
                Add e2e tests and any other cross-cutting work
            </li>
            <li>
                Squash into one commit in a PR
            </li>
        </ol>

        <p>
            This takes <a href="https://github.com/sderickson/saflib/commits/81dfe5d1c88af3c4f65b24724e030eacb17f076d/">about a day</a>, if the feature is scoped well, and I spend a normal amount of time in tandem investing in the framework and documentation. I don't bother with this if the work I'm doing is exploratory, refactoring, or structural; just for things like adding a bit of UI, adding or updating an endpoint or two to serve that UI, and updating the database and/or 3rd party integration to serve those endpoints.
        </p>

        <h3>
            Why bother ever?
        </h3>

        <p>
            I've been taking the time to generate/review specs and checklists for "standard" feature work for a variety of benefits:
        </p>

        <ul class="mt-4">
            <li>
                <strong>Get aligned up-front</strong>. When I give the agent a three-or-four sentence prompt and ask them to generate a complete spec from that, they make assumptions that are revealing and I can correct (or adopt) ahead of time. I can fix those before I get into the thick of things, and the agent will tend to not go off the rails as much.
            </li>
            <li>
                <strong>Provide context to each agent</strong>. I usually use at least a half-dozen agents to build a feature (per Cursor's recommendation to start a new chat for better results), and being able to start with "here's the checklist" and "here's the spec" gets new agents up to speed quickly.
            </li>
            <li>
                <strong>Ready-made prompts</strong>. As well as linking the docs, I'll tend to grab three or four lines of the checklist and give them to a fresh agent to do. Then I can stay in execution mode to just grab whatever's next. I do find pasting the actual lines seems to be better than just telling them "do whatever's next"; I suspect the agent (or Cursor?) weights what you tell them directly over what's in any file that you provide as context, or at least that's how it seems.
            </li>
            <li>
                <strong>Consistent execution (by the agent)</strong>. The agent will make the same kind of mistake repeatedly, such as building something the wrong way, creating a feature when it already exists, or forgetting to run tests. So the checklist can include things like the documentation to use, the file to update, and the command to run tests, and I don't have to remember to tell them each time.
            </li>
            <li>
                <strong>Consistent execution (by me)</strong>. What I include in each prompts evolves as I try new things, and so it's easy to forget what to include in my current iteration. There are also some things which I just don't have the agent do, and so it's a reminder to myself to do them.
            </li>
        </ul>

        <p>
            There's actually just one thing above that I'm not sure about: how much the spec really helps the agent during execution. I haven't actually seen any compelling evidence that it makes a difference. To be sure of that I'll need some analysis and testing, or at least purposefully skip providing it.
        </p>

        <p>
            Otherwise, it's hard to imagine going without this process, at least for rote work. It just makes each feature easier to do if I have a high-level plan and a detailed checklist as I go through. And it frees me to spend more time thinking about things like how to improve the framework and best practices for the codebase, such as <a href="https://github.com/sderickson/saflib/pull/6/files#diff-4f4eb19fb01e045d35bfb22f2531f8206afbda7af28dcced248aba058a46e80e">the appropriate scope of API tests</a>.
        </p>


        <h3>
            Friction Areas
        </h3>

        <p>
            It could take less time to make the checklist. It's a negotiation to get Claude to make them consistently in the format I want. And it's a one-step-forward, two-steps-back experience sometimes where I'll ask them to update the checklist, only for them to strip out a bunch of stuff at the same time.
        </p>

        <p>
            It probably doesn't make sense to generate the checklist, anyway; I could use an <em>actual</em> programmatic tool for creating, updating, and following task lists. Perhaps I can define a TypeScript interface or JSON schema which the agent has to stick to during planning, and/or a tool which the agent uses to get the next task during execution. Then it <em>has</em> to include things like tests in the checklist, and it <em>has</em> to run them before moving on.
        </p>

        <p>
            It's important not to be too presecriptive though, either. The agent has sometimes provided too-detailed specs and checklists, in terms of what files to write and what should go in them, and then when the executing agent gets there it doesn't make sense to do, but the guidance is blindly followed, sometimes making code that just doesn't get used. Better to provide general guidance and hints (add to such-and-such package) than specific instructions (add x to "path/to/file.ts").
        </p>

        <h3>
            Areas of Opportunity
        </h3>

        <p>
            I could build the tool I described above, but it would be a bit of an upfront cost and I'd rather nail down the process more first. But there are other things I can try more easily:
        </p>

        <ul>
            <li>
                <strong>Different models for different roles</strong>. It's been a while since I've tried new models, and it may be that some are better for planning and some are better for execution.
            </li>
            <li>
                <strong>Better system prompts</strong>. There are a handful of things I'd like models to do differently. For example, if something is unclear, doesn't make sense, or just doesn't match reality, they should speak up. And they don't have to comment every third line. And they should verify my words as much as I do theirs. This and perhaps some of the things I mentioned above, like actually running tests, could be part of a system prompt, say, in a Cursor rule.
            </li>
        </ul>

        <p>
            Though I will continue to improve the spec/checklist part of the process iteratively, this is not currently my main focus, because it's not really the best use of time. I want to focus on something more basic: getting tasks to happen correctly more reliably.
        </p>

        <p>
            Thanks for reading!
        </p>
    </div>


</template>