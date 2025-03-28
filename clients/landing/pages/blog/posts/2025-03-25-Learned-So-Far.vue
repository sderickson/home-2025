<template>
  <div>
    <p>
      I inaugurate this blog with a post about AI 🤖. As a web developer and
      entrepreneur, it's pretty omni-present, and I'm currently diving in deep.
      I've only really begun making an acquaintance with AI tools and
      methodologies, but I'm forming opinions. I'm putting up this site and blog
      in part to share those insights, and to start conversations.
    </p>

    <h3>My Goals</h3>

    <p>
      <strong>To form my own opinions</strong>. At the end of last year, I
      didn't have a high opinion of AI, but I also didn't have much of a strong
      one. LLM-powered AI hadn't made its way into my day-to-day work or home
      life, and I hadn't encountered any products where I thought "I'm really
      glad they put AI here." Even among the engineers I knew, few were that
      enthused about using it for coding. But I was also fairly distracted by
      work and home responsibilities. Now I'm taking a sabbatical with the aim
      to come out retooled and opinionated.
    </p>

    <p>I want to form three key opinions:</p>

    <ul>
      <li>
        <strong>The role of AI in software development</strong>: How can we
        leverage AI to write better code, faster, while maintaining quality?
      </li>
      <li>
        <strong>The role of AI in business processes</strong>: Where can AI
        meaningfully improve efficiency while managing new problems?
      </li>
      <li>
        <strong>The role of AI in products</strong>: How can we create
        AI-powered features that users actually want and trust?
      </li>
    </ul>

    <p>
      I have some other non-AI goals too, like learning to make money outside of
      a full-time job, consolidating what I learned about web development at
      Dropbox, and improving my cooking and eating habits. But I digress. The
      point is, I'll be writing about these themes as I explore them.
    </p>

    <h3>My Approach</h3>

    <p>
      <strong>Mainly? Building websites.</strong> But I'm balancing building
      product and experimenting with AI tools and methodologies.
    </p>

    <p>
      To centralize and leverage my learnings across my websites (this is the
      fourth so far), I'm building
      <a href="https://saf-demo.online/" target="_blank">a framework</a> called
      SAF: <strong>Scott's Application Framework</strong>. It's named that
      because it's a framework that I'm building for me,
      <a
        href="https://github.com/sderickson/saf-2025/blob/main/docs/meta/decisions.md"
        >the way I want to</a
      >, but it's also
      <a href="https://github.com/sderickson/saf-2025">open source</a> if others
      want to try it out. Where possible, I'll share learnings and tools I'm
      experimenting with here.
    </p>

    <p>
      Otherwise, I'm just doing a solid mix of
      <a href="https://next.familycaller.com/">building product</a>,
      experimenting with AI tools, and
      <a href="https://github.com/sderickson/saf-2025/commits/main/"
        >building out that framework</a
      >. And writing about it.
    </p>

    <p>
      I'm also trying to keep my ear to the ground. Attending meetups with AI
      users and purveyors, subscribing to subreddits, and doing some reading.
      Probably not doing as much of that as I should, but I do like me some
      learning by doing. And I've got <em>so</em> much I want to build.
    </p>

    <h3>So? What have I learned?</h3>

    <p>Well, maybe learned isn't the right word. I've got working theories:</p>

    <h4>At least right now, AI needs to be heavily managed.</h4>

    <p>
      Maybe I'm not using the "thinking" models quite right yet. But even things
      that shouldn't require that much thinking seem to go awry pretty easily.
      Sometimes the AI will just knock things out of the park, and other times
      it'll spin, mess things up, or just go the wrong direction. It's just not
      very consistent yet.
    </p>

    <p>
      It's sort of like with self-driving cars: they have to be markedly better
      than human equivalents. In both cases, at first, you monitor it very
      closely, and then after some time you find that it never messes up, or if
      it does only very minorly and it rights itself, nothing major. At that
      point you can really stop paying attention. With agentic coding, I'm not
      going to stop paying attention to every line until I've seen consistently
      top-notch output.
    </p>

    <h4>Code Quality is about to become more important than ever</h4>

    <p>
      This theory should probably be broken down. But let me put it this way: if
      you don't stay really on top of quality <strong>all the time</strong>, it
      will <em>not</em> take long for things to go to hell and productivity to
      grind to a halt. Previously, if you let quality slip, it could take
      quarters or years to feel the effects as business priorities shift around
      and bigger projects take a while to land. Now, though, as people generate
      more and more code, things can turn awful on a dime, and even new products
      can suddenly stop gaining new or improved features as both AI and humans
      stop being able to make sense or work with it, requiring
      <a href="https://unfuckit.ai/">intervention</a>.
    </p>

    <p>
      That makes you wonder, as a manager, how do you guard against that? Well,
      what I'd do is build and closely monitor quality metrics:
    </p>

    <ul>
      <li>
        <strong>Test coverage</strong>: This is an easy one, although a bit
        controversial. But I think we can all agree we don't want this to be too
        low.
      </li>
      <li>
        <strong>Linters</strong>: You know what I love? When AI writes
        something, gets linter errors, and fixes them immediately. No
        back-and-forth prompting.
      </li>
      <li>
        <strong>Reliability and Performance</strong>: It doesn't all have to be
        static analysis. If your pages are loading slowly, or users regularly
        run into failures then... that's probably reflected in your codebase.
      </li>
      <li>
        <strong>Modularity</strong>: Context windows are a key limitation with
        LLMs. The more context you have to give them, the more they struggle.
        Even as models get more powerful, we still need to manage complexity at
        every level - from functions to files to packages to products - for both
        AI and human maintainability.
      </li>
    </ul>

    <p>
      I could go on, but you get the idea. The point is that LLMs share many of
      the same strengths and weaknesses as people. We've spent decades
      developing tools to address human limitations and leverage our strengths -
      now we need to apply those same principles to AI. This means adapting
      existing tools to help developers guide AI agents effectively and help
      management ensure AI systems stay on track.
    </p>

    <p>
      Full disclosure: this theory is a bit self-serving. I <em>tend</em> to
      work on these tools and quality problems, and it's what I like to work on.
      But I'm in a good position to test the theory so might as well.
    </p>

    <h4>Bring the vision.</h4>

    <p>
      If you can't envision what you want your agent to do, then you need to
      figure it out first. For example, when I first had Claude generate a
      vuetify-based page, I could sense it was over-complicated but didn't know
      enough about Vuetify to explain why. So I paused, reviewed the docs, and
      came back with clearer guidance.
    </p>

    <p>
      You don't need to know <em>exactly</em> how it should be built. Just like
      delegating to people, focus on <strong>success criteria</strong> and
      <strong>objectives</strong>. There are many valid solutions - the agent
      just needs to produce one that meets your standards. What does "good
      enough" look like to you?
    </p>

    <h4>Don't trust. Always verify.</h4>

    <p>
      Never take AI's word for it. Even when it claims to have done something or
      suggests a solution, verify everything. For example, I've tried having it
      create and update project checklists - it's great at generating them but
      can't reliably track what it's done.
    </p>

    <p>
      This applies to all AI interactions. I like asking Claude for library
      suggestions, but they're just starting points for my own research.
    </p>

    <h3>What's next?</h3>

    <p>
      So far, my focus has been on software development - building tools,
      experimenting with AI coding, and developing my framework. I'm definitely
      building product faster than I ever have before, but I think there's still
      quite some room for growth.
    </p>

    <p>
      For one thing, there's still so many existing tools to explore. I've
      mainly been using Claude and Cursor, but I'm curious about tools like MCP
      and RAGs. I expect these will challenge my current theories about AI
      development.
    </p>

    <p>
      I'm also starting to work on AI-powered products, which is helping me form
      opinions about how to create features that users actually trust and want
      to use (and that I'd want to use). Given what I'm currently working on,
      I'm not sure when I'll get to design and test AI in company processes, but
      I'm building a foundation of practical experience that I can apply when
      those opportunities come.
    </p>

    <p>
      That's all for now. Next up I'll talk more about my current challenge:
      getting the AI to consistently build things the right (or simply my) way.
    </p>

    <p>Thanks for reading! 🙏</p>
  </div>
</template>
