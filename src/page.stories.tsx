import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Grid,
} from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { Data, DataFluid, DataGrid, DataInfo, DataLabel } from "./Data";
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
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
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
