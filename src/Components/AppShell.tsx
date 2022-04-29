import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
// import Buttons from "./Components/Button";
// import Cards from "./Components/Cards";
import LightAndDarkModeButton from "./LightDarkButton";
import ChipsExample from "./ChipsExample";
import InputExample from "./InputExample";
import TitleAndTextExample from "./TitleAndTextExample";
// import TableExample from './TableExample';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Router>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Navbar.Section>
              <Text>hello this is title</Text>
            </Navbar.Section>
            <Navbar.Section grow mt="lg">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text component={Link} variant="link" to="/">
                  Home Page
                </Text>
                <Text component={Link} variant="link" to="/input">
                  Input Page
                </Text>
                <Text component={Link} variant="link" to="/titlePage">
                  Title Page
                </Text>
                <Text component={Link} variant="link" to="/calendarPage">
                  Calendar Page
                </Text>
                <Text component={Link} variant="link" to="/timeInputPage">
                  Time Input Page
                </Text>
                <Text component={Link} variant="link" to="/notificationPage">
                  Notification Page
                </Text>
              </div>
            </Navbar.Section>
            <Navbar.Section>
              <Text>Footer</Text>
            </Navbar.Section>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
              <LightAndDarkModeButton />
            </div>
          </Header>
        }
      >
        {/* <TableExample /> */}
        {/* <ChipsExample />
        <InputExample />
        <TitleAndTextExample /> */}
              <Routes>
        <Route path="/" element={<ChipsExample />} />
        <Route path="/input" element={<InputExample />} />
        <Route path="/titlePage" element={<TitleAndTextExample />} />
        {/* <Route path="/calendarPage" element={<CalendarExample />} />
        <Route path="/timeInputPage" element={<TimeInputExample />} />
        <Route path="/notificationPage" element={<NotificationExample />} /> */}

      </Routes>
      </AppShell>
    </Router>
  );
}
