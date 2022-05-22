# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.233.0/containers/javascript-node/.devcontainer/base.Dockerfile

# TODO: Bump NODE_VERSION to new even-numbered major version at least a month after reaching LTS status. It's recommended to stay with Active or
#       Maintaenance LTS versions for a bit longer before switching out.
ARG NODE_VERSION="16"
# Only switch to new Debian release once every two years, its better to wait a bit for packages to stablize a bit longer.
ARG DEBIAN_VERSION=bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${NODE_VERSION}-${DEBIAN_VERSION}

### Gitpod usage setup - START ###

## Docker ##
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null \
    && apt-get update && apt-get install -yq --no-install-recommends docker-ce docker-ce-cli containerd.io
RUN curl -o /usr/bin/slirp4netns -fsSL https://github.com/rootless-containers/slirp4netns/releases/download/v1.1.12/slirp4netns-$(uname -m) \
    && chmod +x /usr/bin/slirp4netns
RUN curl -o /usr/local/bin/docker-compose -fsSL https://github.com/docker/compose/releases/download/v2.4.1/docker-compose-linux-$(uname -m) \
    && chmod +x /usr/local/bin/docker-compose && mkdir -p /usr/local/lib/docker/cli-plugins && \
    ln -s /usr/local/bin/docker-compose /usr/local/lib/docker/cli-plugins/docker-compose
# https://github.com/wagoodman/dive
RUN curl -o /tmp/dive.deb -fsSL https://github.com/wagoodman/dive/releases/download/v0.10.0/dive_0.10.0_linux_amd64.deb \
    && apt install /tmp/dive.deb \
    && rm /tmp/dive.deb

## Gitpod Linux user setup ##
RUN useradd -l -u 33333 -G node,npm,nvm -md /home/gitpod -s /bin/bash gitpod \
    && rm -rv /home/gitpod \
    && echo "gitpod\ngitpod" | passwd gitpod \
    && echo "gitpod ALL=(root) NOPASSWD:ALL" >> /etc/sudoers.d/gitpod \
    && ln -s /home/node /home/gitpod \
    && chmod -Rv 774 /home/node && usermod -aG gitpod node
### Gitpod usage setup - END

# Setup deno tools
ENV DENO_INSTALL=/deno
RUN mkdir -p /deno \
    && curl -fsSL https://deno.land/x/install/install.sh | sh \
    && chown -R node:node /deno
ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno

# Install more global packages as per https://gitlab.com/gitpodify/gitpodified-repo-starter-pack/blob/main/.gitpod.Dockerfile
RUN su node -c "npm install -g typescript danger prettier eslint"
