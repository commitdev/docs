---
title: Commit’s Guide to Zero
sidebar_label: OSS Zero
sidebar_position: 1
---

*Allow startup developers to ship to production on day 1*

[Zero](https://getzero.dev) is an open source tool which makes it quick and easy for startup technical founders and developers to build everything they need to launch and grow high-quality SaaS applications faster and more cost-effectively. Zero sets up everything you need *(fully configured infrastructure-as-code AWS environment; logging and metrics collected automatically using either Cloudwatch or Prometheus + Grafana, Elasticsearch + Kibana; tooling to make it easy to set up secure access for your dev team; CI pipeline built with CircleCI or GitHub Actions; Golang or Node.js example project automatically set up, Dockerized, and deployed to your new Kubernetes cluster; React example project automatically set up, deployed and served securely to your customers; and more)* so you can immediately start building your product.

Everything built by Zero is yours. After using Zero to generate your infrastructure, backend, and frontend, all the code is checked into your source control repositories and becomes the basis for your new system. We provide constant updates and new modules that you can pull in on an ongoing basis, but you can also feel free to customize as much as you like with no strings attached.

Read about [the day-to-day experience of using a system set up using Zero](https://github.com/commitdev/zero/blob/main/docs/real-world-usage.md)

Read [Martin’s post about using Zero at PlaceHolder](https://commit.dev/2021/08/31/starting-with-zero/)

Read the [documentation about Zero](https://getzero.dev/docs/zero/about/overview) and join our [Slack community](https://slack.getzero.dev/) to learn more and start contributing. 

## Ways to engage with Zero

- Familiarize yourself with it through your HOP demo
- Contribute to it as an open source developer (see the tickets in our [GitHub repo](https://github.com/commitdev/zero)!)
- Use it on a pilot project or side project to speed up development time

## How to identify if Zero could work for your pilot or side project
- You’re joining as the first (or a very early) technical hire. This means the company is likely in the early stages of writing code, and so Zero can provide a lot of value by providing the foundational infrastructure, CI/CD, etc.
- You’re interested in using industry-standard tools to build your system in a way that is easy to get started with but also stable, secure, and scalable over the long term
- There hasn’t been any cloud infrastructure setup, or the existing setup is hacky or not scalable and could be replaced by Zero
- The team doesn’t have substantial DevOps experience in house (and don’t have their own templates of how to set things up)
- Want to run your application containerized in a Kubernetes cluster, rather than with serverless tools like Lambda (we will likely not support this as we don’t consider it to be a good long-term choice for many use cases)
- You are open to using AWS tools - at the moment, only AWS is supported so if the team already has significant investment in GCP or Azure, much of the benefit of Zero won’t be realized.

## Current Users

We haven’t launched Zero publicly yet, but it is currently being used in production (by Planworth, Placeholder, Commodity, AtlasOne, and Patch, as well as Commit). Anyone is welcome to use Zero. Practically, the first step is often getting on a call with Bill to talk about the specifics of your project and a plan of action to leverage Zero if applicable.
