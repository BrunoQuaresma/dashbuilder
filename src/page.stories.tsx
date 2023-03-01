import {
  TableContainer,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Button,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Tr,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { Data, DataFluid, DataInfo, DataLabel } from "./Data";
import {
  Header,
  HeaderGroup,
  HeaderTitle,
  HeaderSubtitle,
  HeaderRight,
  HeaderBreadcrumb,
} from "./Header";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { NavbarTemplate } from "./Navbar.template";
import { NextButton, Pagination, PreviousButton } from "./Pagination";
import { SearchField } from "./SearchField";
import { Tag } from "./Tag";
import { ClickableRow } from "./ClickableRow";
import {
  Form,
  FormFields,
  FormSection,
  FormSectionDescription,
  FormSectionTitle,
} from "./Form";

export default {
  component: Navbar,
  title: "Pages/Dashboard",
};

const ResourcesTemplate: FC<PropsWithChildren> = ({ children }) => (
  <>
    <NavbarTemplate />
    <Header>
      <HeaderGroup>
        <HeaderTitle>Payments</HeaderTitle>
        <HeaderSubtitle>
          See all the payments. <Link href="#">Learn more</Link>.
        </HeaderSubtitle>
      </HeaderGroup>

      <HeaderRight>
        <Button size="sm" variant="outline">
          Settings
        </Button>
        <Button size="sm" colorScheme="blue">
          Add payment
        </Button>
      </HeaderRight>
    </Header>

    <Main>
      <SearchField />

      <TableContainer borderWidth={1} rounded="md" mt={8}>
        <Table>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <ClickableRow>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </ClickableRow>
            <ClickableRow>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </ClickableRow>
            <ClickableRow>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </ClickableRow>
          </Tbody>
        </Table>
      </TableContainer>

      <Pagination mt={4}>
        <PreviousButton />
        <NextButton />
      </Pagination>
    </Main>
  </>
);

export const ResourcesPage = ResourcesTemplate.bind({});

const ResourceTemplate: FC<PropsWithChildren> = ({ children }) => (
  <>
    <NavbarTemplate />

    <Header>
      <HeaderGroup>
        <HeaderBreadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Payments</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrentPage>
              12422323
            </BreadcrumbLink>
          </BreadcrumbItem>
        </HeaderBreadcrumb>

        <HeaderTitle>
          Jone's payment
          <Tag colorScheme="green">Paid</Tag>
        </HeaderTitle>
      </HeaderGroup>

      <HeaderRight>
        <Button size="sm" variant="outline">
          Edit
        </Button>
        <Button size="sm" colorScheme="red">
          Remove
        </Button>
      </HeaderRight>
    </Header>

    <Main>
      <DataFluid>
        <Data>
          <DataLabel>User</DataLabel>
          <DataInfo>Jone Doe</DataInfo>
        </Data>

        <Data>
          <DataLabel>Paid at</DataLabel>
          <DataInfo>02/27/2023 at 07:10PM</DataInfo>
        </Data>
      </DataFluid>
    </Main>
  </>
);

export const ResourcePage = ResourceTemplate.bind({});

const NewResourceTemplate: FC<PropsWithChildren> = ({ children }) => (
  <>
    <NavbarTemplate />

    <Header>
      <HeaderGroup>
        <HeaderBreadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Payments</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrentPage>
              New payment
            </BreadcrumbLink>
          </BreadcrumbItem>
        </HeaderBreadcrumb>

        <HeaderTitle>New payment</HeaderTitle>
      </HeaderGroup>

      <HeaderRight>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
        <Button size="sm" colorScheme="blue">
          Add payment
        </Button>
      </HeaderRight>
    </Header>

    <Main>
      <Form>
        <FormSection>
          <FormSectionTitle>User info</FormSectionTitle>
          <FormSectionDescription>
            Enter the user details to verify the payment
          </FormSectionDescription>

          <FormFields>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input />
            </FormControl>
          </FormFields>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Payment details</FormSectionTitle>
          <FormSectionDescription>
            Set the payment details below
          </FormSectionDescription>

          <FormFields>
            <FormControl isRequired>
              <FormLabel>Value</FormLabel>
              <Input />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Due date</FormLabel>
              <Input />
            </FormControl>
          </FormFields>
        </FormSection>
      </Form>
    </Main>
  </>
);

export const NewResourcePage = NewResourceTemplate.bind({});
