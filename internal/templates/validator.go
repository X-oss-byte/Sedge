package templates

const (
	LighthouseValidator = `
version: "2.4"

services:

  validator:
    restart: unless-stopped
    container_name: lighthouse-validator-client
    image: ${IMAGE_VERSION}
    volumes:
      - ./keystore:/var/lib/lighthouse/keystore
    command:
      - lighthouse
      - vc
      - --beacon-nodes=${CC_NODE}
      - --graffiti=${GRAFFITI}
      - --network=${NETWORK}
      - --debug-level=${LOG_LEVEL}
      - --validators-dir=/var/lib/lighthouse/keystore
      - --secrets-dir=/var/lib/lighthouse/keystore/secrets
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "10"
`
	LodestarValidator = `
version: "2.4"

services:

  validator:
    restart: unless-stopped
    container_name: lodestar-validator-client
    image: ${IMAGE_VERSION}
    volumes:
      - ./lsvalidator-data:/var/lib/lodestar/validator
      - ./keystore:/var/lib/lodestar/keystore
    environment:
      NODE_OPTIONS: --max_old_space_size=8192
    command: 
      - validator
      - --network=${NETWORK}
      - --rootDir=/var/lib/lodestar/validator
      - --logFile=/var/lib/lodestart/validator/logs/validator.log
      - --logLevelFile=${LOG_LEVEL}
      - --importKeystoresPath=/var/lib/lodestar/keystore
      - --importKeystoresPassword=/var/lib/lodestar/keystore/password.txt
      - --server=${CC_NODE}
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "10"
	`
	PrysmValidator = `
version: "2.4"

services:

  validator:
    restart: unless-stopped
    container_name: prysm-validator-client
    image: ${IMAGE_VERSION}
    volumes:
      - ./prysmvalidator-data:/var/lib/prysm
      - ./wallet:/var/lib/prysm/wallet
    command:
      - --datadir=/var/lib/prysm
      - --wallet-dir=/var/lib/prysm/wallet
      - --beacon-rpc-provider=${CC_NODE}
      - --graffiti=${GRAFFITI}
      - --verbosity=${LOG_LEVEL}
      - --${NETWORK}
      - --enable-doppelganger
      - --accept-terms-of-use
      - --wallet-password-file=/var/lib/prysm/wallet/password.txt
    logging:
      driver: "json-file"
      options:
  	    max-size: "10m"
  	    max-file: "10"
	`
	TekuValidator = `
version: "2.4"

services:

  validator:
    restart: unless-stopped
    container_name: teku-validator-client
    image: ${IMAGE_VERSION}
    user: root
    volumes:
      - ./tekuvalidator-data:/var/lib/teku
      - ./keystore:/var/lib/teku/keystore
    command:
      - validator-client
      - --beacon-node-api-endpoint=${CC_NODE}
      - --data-path=/var/lib/teku
      - --log-destination=CONSOLE
      - --network=auto
      - --validators-graffiti=${GRAFFITI}
      - --validators-keystore-locking-enabled=true
      - --validator-keys=/var/lib/teku/keystore:/var/lib/teku/keystore/secrets
      - --validators-early-attestations-enabled=false
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "10"
	`
)
