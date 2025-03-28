<template>
  <div>
    <p>
      As I mentioned in my last post, I expect code quality to become more
      important than ever when building and maintaining code with AI. Linters,
      tests, and modularity are key to efficient and well
      <s>written</s> generated code, but today I want to dive into
      <strong>documentation</strong>, which I haven't seen talked about as much.
    </p>
    <p>Here's my hypothesis:</p>
    <v-card color="grey-lighten-4">
      <v-card-text class="text-body-1">
        In order to get to the next level of productivity with agentic coding,
        it's
        <strong>necessary</strong> to write and maintain a corpus of
        documentation that is accessible both to the agent and the human
        developer.
      </v-card-text>
    </v-card>
    <p>
      I think it's a bottleneck because in the (admittedly short) time I've
      spent working with agents, I've had to explain over and over on problems
      which already have solutions. They spin on mocking libraries for Vue
      component testing, implement with patterns and interfaces and schemas
      inconsistent with existing implementations, and just generally build
      things in a not-ideal way which will come back to haunt us later, like:
    </p>
    <ul>
      <li>
        Mocking a layer of the code in tests so close to the target that it's
        not really testing much of anything, providing a false sense of
        security.
      </li>
      <li>
        Leaking implementation details across library boundaries, breaking
        separation of concerns and making it harder to change things down the
        line.
      </li>
      <li>
        Installing multiple versions of the same package, or multiple packages
        that serve the same need, reducing efficiency and setting the stage for
        weird bugs
      </li>
    </ul>
    <p>
      These are the sorts of things developers and managers worry about when
      they see vibe coding trends. People get a high when things just magically
      work to begin with, but from experience we know it won't be long before
      there are major headaches to deal with.
    </p>
    <p>
      For myself, I want to get to the point where most of the time when I give
      the agent a well-defined task (add a table to the db, add a new property
      to an endpoint endpoint, refactor this frontend piece), it will do it well
      <strong>without any additional guidance</strong>. If I can get it to do
      that, say, ~90% of the time, then I would spend less time reviewing every
      line of generated code, and instead focus on broader and harder-to-fix
      concerns like interface design, database schemas, system architecture, and
      what E2E tests I want. Some bugs will sneak in, but if the success rate is
      high enough then deep human review will glean diminishing returns.
    </p>
    <p>I hope documentation can get us there, so let me share my approach.</p>
    <h3>Overview</h3>
    <p>
      I have three elements to offer which should help keep that make this a
      sustainable habit, by minimizing cost to you and maximizing benefit:
    </p>
    <ol>
      <li>
        <strong>Structuring Docs</strong>: When writing documentation, it's a
        buzzkill if you don't even know where to put it to begin with, how to
        frame it, or what to include. That blank page can be rough, and there
        will be many to fill. I have some general ideas that you can apply when
        deciding what even to write and how much.
      </li>
      <li>
        <strong>Creating Docs</strong>: This is actually the easiest part. You
        can generate and update documentation as a byproduct of your work. If
        you can incorporate automated testing into your standard practice, you
        can also incorporate documentation-driven development. Both are easier
        than ever with agents.
      </li>
      <li>
        <strong>Consuming Docs</strong>: This is where things get tricky again.
        In a perfect world, the agent would know what documentation to use for
        every scenario, but at least I haven't figured out how to do that yet.
        Still, you can get some immediate benefits to your workflow by just
        linking to the docs you have as you create them, focusing on the tasks
        you do most often.
      </li>
    </ol>
    <h3>Library and Document Structure</h3>
    <p>
      You're going to be making a lot of documentation, how to keep track of it
      all? How do you break it down into right-size pieces? Well, here's my
      structure:
    </p>
    <pre>
# Root directory structure
/
├── clients/                
│   ├── spa1/               
│   ├── spa2/
│   └── ...
├── services/               
│   ├── service1/
│   ├── service2/
│   └── ...
├── (other-product-folders)/
│   └── ...
└── saflib/
    ├── shared-library/
    │   ├── package.json
    │   ├── src/
    │   └── docs/
    │       ├── doc1.md
    │       ├── doc2.md
    │       └── ...
    └── group-of-shared-dependencies/
    │   ├── package.json
    │   └── docs/
    └── ...
    </pre>
    <p>For context, "SAF" is my app framework, and there are these repos:</p>
    <ul>
      <li>
        <a href="https://github.com/sderickson/saflib">saflib</a> - shared
        libraries and documentation
      </li>
      <li>
        <a href="https://github.com/sderickson/saf-template">saf-template</a> -
        template repo for new SAF projects
      </li>
      <li>
        <a href="https://github.com/sderickson/saf-2025">saf-2025</a> - a demo
        site, and also the first place I build new SAF functionality
      </li>
    </ul>
    <p>
      Each SAF project clones the
      <code>saflib</code> directory as a git submodule; both
      <code>saf-2025</code> and <code>saf-template</code> do that. By colocating
      shared code and docs, I can rest assured anything I write can be used
      across all my projects, and I can develop and use shared code in tandem.
    </p>
    <p>
      For example, the
      <code>drizzle-sqlite3</code> package encapsulates everything important
      around SQLite in my projects:
    </p>
    <ul>
      <li>
        <a
          href="https://github.com/sderickson/saflib/blob/main/drizzle-sqlite3/package.json"
          >runtime dependencies</a
        >
        (dev deps are in
        <a
          href="https://github.com/sderickson/saflib/blob/main/drizzle-sqlite3-dev/package.json"
          ><code>drizzle-sqlite3-dev</code></a
        >)
      </li>
      <li>
        <a
          href="https://github.com/sderickson/saflib/tree/main/drizzle-sqlite3/src"
          >helper methods</a
        >, and of course
      </li>
      <li>
        <a
          href="https://github.com/sderickson/saflib/tree/main/drizzle-sqlite3/docs"
          >documentation</a
        >
      </li>
    </ul>
    <p>
      I'm pretty pleased with this structure; it's usually clear where something
      needs to go. I'm already dividing up package dependencies and
      implementations by like-dependencies and concerns, so it's natural to
      extend that grouping to documentation.
    </p>

    <h4>Adopting a Documentation Structure</h4>
    <p>
      For your own codebases, I recommend grouping your docs similarly. If your
      codebase is disorganized (whose business critical codebase isn't?) then
      you might identify an existing under-utilized common space, or just create
      one, and start filling that out and pulling like concerns in as you go.
      These "packages" that house documentation on a theme don't
      <em>have</em> to have anything else in them (like my
      <a href="https://github.com/sderickson/saflib/tree/main/processes"
        ><code>processes</code> "package"</a
      >
      which has no code nor dependencies... for now).
    </p>
    <p>
      At <em>least</em> store your docs in the repo so the agent can more easily
      find and edit them. You can probably give the agent a doc tool for some
      remote resource, and I haven't tried that yet, but that seems like
      unnecessary complexity given the agent has to edit as well as read them.
      But you do you.
    </p>
    <h4>Document Right-sizing</h4>
    <p>
      Make your documents task-sized. If you'd tell your agent to "set up a stub
      route" then have a doc for
      <a
        href="https://github.com/sderickson/saflib/blob/main/node-express/docs/adding-routes.md"
        >writing a route</a
      >
      that always returns 200. If you tell an agent to "test this vue component"
      then have a doc for
      <a
        href="https://github.com/sderickson/saflib/blob/main/vue-spa-dev/docs/component-testing.md"
        >testing components</a
      >. If you want the agent to create a new TS library, have a doc for
      <a
        href="https://github.com/sderickson/saflib/blob/main/monorepo/docs/ts-packages.md"
        >setting one up</a
      >. This way your prompt can be pretty concise: a well-defined ask, the
      name of the file to edit or add, and the doc.
    </p>
    <p>
      If a document starts to get too big, that probably means your task is
      getting too complex, and it needs to be broken down into smaller tasks,
      with smaller docs. Or you need better helpers or libraries which manage
      the complexity better.
    </p>
    <p>That's just you engineering.</p>
    <h3>Generating Documentation</h3>
    <p>
      I say "generating" documentation because I want to be clear you won't be
      writing it; the agent will. Don't worry about setting aside days or weeks
      to fill in all your docs, the way to do this is to add doc-writing to your
      development cycle. It should look like this:
    </p>
    <ol>
      <li>
        Give the agent a task to do, along with any existing relevant docs and a
        link to the file/folder to create or edit.
      </li>
      <li>
        Go back-and-forth with this one agent to get it right. For best results,
        don't fix things, or at least major things, yourself. If you do, explain
        to the agent what you did to solve the problem and why.
      </li>
      <li>
        Once the code is good enough, tell the agent to write or update
        documentation based on your back-and-forth
      </li>
    </ol>
    <p>
      This way all of the time spent coaching the agent goes beyond the one
      session. I review the docs they write, prompt them to make changes if
      there are large ones or make the changes myself if they are small (it's
      more okay to do the fixing yourself with the docs). Then I create a new
      agent for the next task and the loop starts again. Or, if I
      <em>really</em> want the next iteration to go much better, I'll revert all
      the previous agent's work and give the same task to a new agent with the
      generated docs. Repeat until an agent does everything right (enough) the
      first try.
    </p>
    <p>
      In terms of how the documents themselves are written or structured, I let
      the agent do it how it will. I might suggest some content belongs better
      in a different doc, but again I'm not spending a bunch of time polishing
      here. I have a sneaking suspicion the agent is too profligate with its
      words and examples, but that feels more like an optimization than a dire
      issue.
    </p>
    <h4>Loop Progression</h4>
    <p>
      One thing I've noticed is that when there
      <em>is</em> documentation and the agent does it wrong,
      <strong
        >it's usually because the documentation is out of date or wrong</strong
      >! Luckily, having the agent fix the documentation is also not hard at
      all, I usually tell it to do just that and it does based on our
      back-and-forth, or a more recent example. Using that
      <code>drizzle-sqlite3</code> example from before, I'd started using a
      factory pattern in my implementation, but hadn't updated the docs yet, so
      the agent started off the old way as specified in the doc. When it tried
      to add the database query to the others, it quickly realized its mistake
      and refactored. Then I had it update
      <a
        href="https://github.com/sderickson/saflib/pull/3/files#diff-839f134a6266bf815d546e9a26247227ca9fd21cfc4f22fa3adcf669b4916b21L26"
        >the doc</a
      >.
    </p>
    <p>
      That's another benefit of explicit, accessible documentation: new best
      practice adoption happens organically over time. If the agent is given a
      doc with the latest best practices and some code to work with that was
      made earlier on, it can be prompted to bring that code up-to-date first
      before implementation. It might even do that of its own accord, which is
      always nice. At least for things that don't require multi-step migrations,
      just having docs is enough to see adoption fairly quickly, at least on
      active areas of the codebase. Even for those things that require
      multi-step migrations, documentation can help make sure they go in the
      right direction when they do change in the future. The doc becomes a
      source of truth so the agent (and the developer!) doesn't have to guess
      which approach it should take.
    </p>
    <p>
      One more thing to keep the pace and motivation going: I'm honestly pretty
      loose about my documentation. Reading over some of the docs now, I can
      find all sorts of things that could be better and accurate, but I'm
      resisting the urge to clean it all up for this post. Perfect is the enemy
      of the good and all that, so I'm setting a low bar because I'm more likely
      to fill out the docs and have a reasonable base to build on and iterate
      with if I don't aim to have polished output every PR. Once a doc stops
      getting updates as frequently through this cycle, or you're ready for
      wider adoption, that's probably a good time to go back and polish it.
    </p>
    <h3>Consuming Documentation</h3>
    <p>
      This I'm still trying to figure out. In an ideal world, the agent would
      just find the docs it should use on its own, but so far I haven't been
      able to get that to happen. Mostly I've been playing around with
      <a href="https://docs.cursor.com/context/rules-for-ai"
        >Cursor's rules for AI</a
      >, but that really didn't work. I'd give the agent a system prompt with a
      list of docs, or a link to a list of docs and ask it to affirm it read the
      docs, and it very rarely did.
    </p>
    <p>
      The next thing I tried was to incorporate documentation into checklists.
      I'd have a template I'd ask it to generate a checklist from, with links to
      docs throughout the template, and the agent would just strip them out in
      the project checklist. The agent also would tend not to follow checklists
      without a heavy hand... This is a tangent, so I'll go into process more in
      my next blog post. Suffice it to say, telling the agent to follow a
      checklist with "review doc" instructions sprinkled in doesn't work.
    </p>
    <p>
      At this point, I just provide documentation to the agent manually. I still
      have the agent create checklists like
      <a
        href="https://github.com/sderickson/saf-2025/blob/main/notes/2025-03-28-auth-scopes/checklist.md"
        >this one</a
      >, but I often have to insert docs into the list myself. And really, those
      checkboxes are for <em>my</em> benefit, so I can copy/paste them into the
      prompt when we get to that task so the agent is less likely to sidestep my
      very healthy obsession with docs.
    </p>
    <p>
      The good news is that when the agent <em>does</em> RTFM, the output is
      markedly closer to what I want. The problems I see all tend to be
      undocumented, or wrongly documented. I have a ways to go before all the
      common tasks are written down, but I'm already moving faster. For example,
      the checklist above was a pretty cross-cutting feature that took less than
      a day, and much of that was spent adding docs. I estimate without them it
      would have taken twice that time, and I wouldn't have a bunch of new and
      refreshed markdown files to show for it.
    </p>
    <h3>Wrapping Up</h3>
    <p>
      That's where I'm at right now. I'll close out this post with some
      questions I imagine you might have.
    </p>
    <h4>What existing tools are out there?</h4>
    <p>
      Seems thin. I did a cursory look around and when it comes to documentation
      and refactoring, the tools I find tend to be fairly low-level (like
      <a href="https://docusaurus.io/">docusaurus</a> or
      <a href="https://vitepress.dev/guide/what-is-vitepress">vitepress</a>),
      built for human-only consumption (like
      <a href="https://codescene.com/">codescene</a>), or agent-only consumption
      (such as <a href="https://codebuddy.ca/">codebuddy</a>). I think for now
      you have to manage your own high-level documentation yourself, so
      hopefully this post gives you some ideas in that regard.
    </p>
    <p>
      I'll keep an eye out, and update this post if I find anything that looks
      promising. If you find something,
      <a href="mailto:sderickson@gmail.com">let me know</a>.
    </p>
    <h4>What's next?</h4>
    <p>
      Consuming docs is the most under-developed part of my workflow. I'm going
      to keep giving the agent documentation manually for now, because I'm still
      tuning and assessing the structure and creation. Once I'm more confident,
      I might try creating an
      <a href="https://github.com/modelcontextprotocol">MCP</a> that generates
      prompts more automatically and piecemeal so I can just tell the agent to
      "do the next item the checklist tool gives you" rather than copy and
      pasting doc and file links, and also auditing every step of the process
      (did they remember to run the tests?).
    </p>
    <p>
      Even further down the line, I'd like to set up some sort of
      <a href="https://inspect.aisi.org.uk/">evaluation</a>, both of the
      documentation and of the agents that use them. I'm really focused on
      Cursor agent right now, but it would be great to compare that to, say,
      Claude Code, Cline, and Windsurf, and analyze how good those tools are at
      using docs compared to each other. Or how much better an agent is at
      making changes based on different docs.
    </p>
    <p>
      A complementary topic which I've been alluding to is the process for
      agentic coding for whole features or even roadmaps. I'll write about that
      in my next post.
    </p>
    <h4>Can I get involved?</h4>
    <p>
      I'd like that! Let me know what you think, or give this approach a try and
      see if it works for you. If you want you can try working with what I have,
      clone the
      <a href="https://github.com/sderickson/saf-template">SAF template repo</a>
      and try to build with it. Also, watch the
      <a href="https://github.com/sderickson/saflib">saflib repo</a> to follow
      along, and feel free to leave issues or PRs there.
    </p>
    <p class="text-center mt-12">
      <strong>Thanks for reading!</strong>
    </p>
  </div>
</template>
