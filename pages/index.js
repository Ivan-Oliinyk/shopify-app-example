import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {
  Page,
  Layout,
  EmptyState,
  Button,
  Card,
  Tag,
  Stack,
  Badge,
  TextField,
} from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ResourceListWithProducts from "./components/ResourceList";

// const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

///first try
// class Index extends React.Component {
//   state = { open: false };
//   render() {
//     // A constant that defines your app's empty state
//     const emptyState = !store.get("ids");
//     return (
//       <Page>
//         <TitleBar
//           primaryAction={{
//             content: "Select products",
//             onAction: () => this.setState({ open: true }),
//           }}
//         />
//         <ResourcePicker
//           resourceType="Product"
//           showVariants={false}
//           open={this.state.open}
//           onSelection={(resources) => this.handleSelection(resources)}
//           onCancel={() => this.setState({ open: false })}
//         />
//         {emptyState ? ( // Controls the layout of your app's empty state
//           <Layout>
//             <EmptyState
//               heading="Discount your products temporarily"
//               action={{
//                 content: "Select products",
//                 onAction: () => this.setState({ open: true }),
//               }}
//               image={img}
//             >
//               <p>Select products to change their price temporarily.</p>
//             </EmptyState>
//           </Layout>
//         ) : (
//           // Uses the new resource list that retrieves products by IDs
//           <ResourceListWithProducts />
//         )}
//       </Page>
//     );
//   }
//   handleSelection = (resources) => {
//     const idsFromResources = resources.selection.map((product) => product.id);
//     this.setState({ open: false });
//     store.set("ids", idsFromResources);
//   };
// }
/// end firs try

///secont try
const Index = () => {
  return (
    <Page title="Product page">
      <Layout>
        <Layout.Section oneHalf>
          <Card title="Product name">
            <Card.Section>
              <Stack spacing="baseTight">
                <Tag onRemove={() => console.log("hellow")}>test1</Tag>
                <Tag onRemove={() => console.log("Hellow")}>test2</Tag>
                <Tag onRemove={() => console.log("Hellow")}>test3</Tag>
                <Tag onRemove={() => console.log("hellow")}>test1</Tag>
              </Stack>
            </Card.Section>

            <Card.Section>
              <Stack distribution="equalSpacing">
                <TextField />
                <Button primary>Add tag</Button>
              </Stack>
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card title="Product name">
            <Card.Section>
              <Stack spacing="baseTight">
                <Tag onRemove={() => console.log("hellow")}>test1</Tag>
                <Tag onRemove={() => console.log("Hellow")}>test2</Tag>
                <Tag onRemove={() => console.log("Hellow")}>test3</Tag>
              </Stack>
            </Card.Section>

            <Card.Section>
              <Stack distribution="equalSpacing">
                <TextField />
                <Button primary>Add tag</Button>
              </Stack>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Index;
