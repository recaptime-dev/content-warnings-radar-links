import { h } from "../deps.tsx";
import { Layout } from "../components/layout.tsx";
import { Block } from "../components/block.tsx";

export function Index() {
  return (
    <Layout
      description
    >
      <Block>
        <div class="flex flex(col lg:row)">
          <div class="inset-y-0 left-0 w(full lg:3/5)">
            This 

            <br />
            <br />

            A custom name may also be requested to be associated with your
            uploaded scripts. These aliases are versioned and can be updated
            with new tags unlike the raw links for a script which are permanent
            and therefor not versioned. To request an alias a GitHub account
            login is required to prevent abuse.
          </div>
          </div>
        </div>
      </Block>
    </Layout>
  );
}
