When I think about how software development will evolve over the coming years, Factorio comes to mind. It's a computer game, sort of an overhead RTS, where you crash land on an alien planet, and over time go from gathering materials and building conveyer belts by hand, to designing and building huge, ever-growing and heavily optimized factories.

It's a gradual process, and you can't skip ahead, but you're also fundamentally limited if you don't adopt generic systems. Once you create a small portion of your factory dedicated to manufacturing a certain product, such as high-end circuit boards, you can create a blueprint which lets you copy and paste it to create a great many more. But then you need to scale up your harvesting, logistics, power, and defensive systems. Once these have all reached a certain level of maturity, you can actually play without looking at your individual character. You just keep the game map open with the different overlays and tell your systems "harvest everything in this region" or "build seven more factories of this type over in that area". You govern at a high level in order to scale up your production.

Right now, building my own web app base, feels like it's going in a similar direction, and I'm working on blueprints right now. I spent a while working on the really basic stuff: databases, web servers, frontend, deployments, and unit testing. Now I'm working on streamlining the next set of systems to support more complicated features and larger systems: service-to-service rpcs, observability, e2e testing, back-end state machines, and a testing mock strategy. For each of these, I'm writing workflows which make it faster to stamp out new API endpoints, form components, third-party integrations, email templates, or machine states.

To see how far agentic workflows can scale up productivity, I foresee these requirements:

1. Workflow evals to ensure sufficient reliability.
2. Higher-order workflows such as for designing, planning, and pivoting.
3. Higher-and-higher order workflows such as for strategizing, prioritizing, and making decisions.

The difference with Factorio is that it's *designed* to achieve these higher levels. LLMs are a new tool, so it's currently unclear how successful they'll be at each of these levels. The more I work with them, though, the more convinced I am that they *can* be set up to automate much of what we do at each level.

Where does that leave us, those who are working at those levels now?

I think our role is to **govern** these systems. To frame this as an American, we need to decide what are the rules (legislate), set up workflows to enact those rules (execute), and tune them based on situations that come up (judicial case-law).

## Governance In Practice

To see how this looks, let's dive into what are the component systems for a specific kind of developer: a developer of developer tools, a "DX" (Developer eXperience) engineer. Their role is to define how other developers build product, decide what languages and platforms they use, list what rules that code needs to follow (such as disallowing "dead" code which never runs), and build and maintain the systems to enforce those rules.

### Legislation

For this, it's documentation. This is the source of truth of how things Should Be Done.

This is pretty simple, really. I mean, documentation should be well written, organized, and thought out, and there should be processes for updating that documentation. It's pretty cut-and-dry.

For me, rules are represented as markdown files in the repository in a "docs" folder, co-located with the code that it governs. That way they're easily accessed, and can go through the same change process as new or changed code: owned, versioned, reviewed, and merged. When I'm creating rules, I research options, test them out, come up with acceptance criteria, and make decisions. I also use AI to help write the docs based on what I build in tandem with my research. See doc driven development for more details.

### Execution

Execution is done through processes. This is the main way things that Should Be Done, *get* done.

If there's documentation on how to do something like create a web page or add a database query, then a process enacts that documentation in a consistent way, both in that it does that work reliably and it matches the documentation. This is basically a well-structured, richly featured checklist. In the framework of [Diataxis](https://diataxis.fr/), execution is following [How-to Guides](https://diataxis.fr/how-to-guides/). It includes checks along the way to make sure things are executed the way they should be, and branches based on different situations and context.

For software development, I'm using a finite state machine to represent my developer workflows. These are mostly a linear set of steps, and some steps prompt the agent (or human) to do something, and other steps are simply scripts which do things like copy a set of template files into a destination folder or generate assets from source. When I'm working on a new workflow, I test it and make changes when I find the agent doesn't follow the rules correctly, and usually add/update rules as I realize I need them along the way for at least the basic cases.

### Case-Law

In theory, there's no difference between theory and practice. In practice, there is.

As such, you need a system which evolves based on cases that were not thought of or planned for or discovered at the outset. You need to build on the theoretical foundation of the rules, and fill in the gaps or otherwise handle gnarly situations. These will mostly affect how things are executed, and inform ways the rules may change. This means picking illustritive scenarios that come up, deciding how they should resolve, and then recording and incorporating them into the governance process to ensure execution follows this new precedent.

For software development, these are evals. An eval represents a scenario, ideally based on an actual "case" that came up, putting the workflow through that situation and checking that the result matches the decision. For example a workflow for creating an API route might have evals for routes which access the database, another server, or a third party service, or some combination of these things. If the workflow in practice ends up doing something I hadn't considered but I deem undesirable, such as doing CPU-intensive work, I might create an eval to ensure in that situation the route uses a job-queueing system instead.

## The Governing Engineer

The above gives an idea of what being a DX developer might look like going forward. Let's say you're in the middle of things, you're working for an organization with a mature codebase, with developer documentation, agent-driven developer workflows, and a suite of evals for those workflows. Your work might look like some combination of:

* Create a new developer tool, and make a prototype with it to test its behavior and ergonomics, hashing out an initial set of rules and a workflow to execute them.
* Review existing workflow usage, inputs and outputs, and pick out cases where things go awry to create evals, adjusting the workflow accordingly. Respond in particular when there are particular incidents or migrations which highlight issues.
* Propose changes to the rules, based on identifying a pattern of cases which go against the rules, or a pattern of precedent which demonstrates the need.

There's clearly plenty of software developer skills still needed here, and actual coding to be done. You can't make informed, reasonably decisions about the rules of software development, or set new precedents, without understanding the nature of the trade. You have to build something that doesn't scale first before you figure out how to scale it. You need to make the prototype which the blueprint is based on.

## The Governing Worker

I give the DX engineer as an example, but I believe many work roles could evolve into a "governance" structure. Imagine for your role, how it might become managing a set of rules, workflows, and evals specific to that role. Here are some examples that come to my head, for roles I've filled or worked closely with.

* A frontend developer works on rules for product (all user-facing interfaces must be accessible, localized, and handles errors), workflows that follow those rules (list accessible components available, automatically generate a separate file for English strings, and add a step to show an alert for network errors), and evals that expand on those rules (what happens if the design system does not have an accessible component for the product being built).
* A manager works on rules for the team (stand-up should be written in Slack on certain days, team members should keep an updated personal-growth-plan, and everyone should take a reasonable amount of PTO), workflows that follow those rules (message reminders to people who did not post an update, add PGP doc to 1:1 agenda at a regular interval, and get alerted when people are taking vacation well outside the norm, either above or below), and evals that expand on those rules (people at different stages in their career need to go over PGP more or less frequently).
* A customer advocate works on rules for responding to user needs (responses should be made in less than 24 hours, technical issues should be escalated to the appropriate team, insights should be gleaned over time that can inform product direction), workflows that follow those rules (alerts are made if a response is getting stale, agents attempt to reproduce bugs in a sandbox to provide in a report, support requests are tagged and assessed for patterns), and evals that expand on those rules (what if the bug was already fixed and that's why the agent couldn't repro the error).
* An exec works on rules for the organization (OKRs must be written and updated by all managers, surveys of employee sentiment should be taken and reviewed and acted on at regular intervals, and incidents should go through a certain process), workflows that follow those rules (alert and ping when OKRs have gotten stale or are not present, or action items are not filled or completed by a certain time), and evals that expand on those rules (how to handle if an issue or complaint is recurring?).

I suspect that, for every level of employee, be they individual contributor or C-suite, will benefit from being able to directly govern all three aspects. That means the technical systems can't just be the purview of engineers; everyone needs to be able to articulate and produce a workflow or an eval just as easily as it would be to articulate a rule. Or at least, there should be no technical barrier to doing so. So I expect interfaces for tools that target certain roles (Figma, Confluence, Zendesk) to facilitate creating and maintaining them.

Then *users* can become *governers*.

