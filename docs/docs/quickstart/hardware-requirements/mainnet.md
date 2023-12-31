---
sidebar_position: 1
id: mainnet-requirements
---

# Mainnet

Some of the most essential requirements for Mainnet can be found in the [Ethereum Launchpad Checklist](https://launchpad.ethereum.org/en/checklist):

### Storage

As you need to keep both execution and consensus layers (consensus and validator client) databases in a single machine, it is recommended to have a solid state storage disk with ~1TB for Mainnet. 

> In our experience 300-500 GB for the Testnets can be a good minimum range. The older the Testnet, the more space you will need.

### CPU and RAM

- Check with client documentation to ensure the hardware you want to use is sufficient and supported.
- Resource usage can vary significantly between clients. Research the different clients if you're working with resource constraints.

### Internet

- Ideally your internet connection should be reliable and as close to 24/7 as possible without interruption.
- Ensure your bandwidth can't be throttled and isn't capped so your node stays in sync and will be ready to validate when called.
- You need enough upload bandwidth too. As of May 2022 this is ~1.2-1.3 GB download and ~0.9-1 GB upload per hour, and is likely to increase.
