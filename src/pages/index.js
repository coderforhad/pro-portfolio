import Head from "next/head";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import CardAbout from "src/components/elements/CardAbout";
import { whatTodo } from "src/demo-data/About";


const Page = () => (
  <>
    <Head>
      <title>Home | Portfolio</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Stack direction="column" justifyContent="space-between" spacing={2}>
            <Card xs={12}>
              <CardContent xs={12}>
                <Grid xs={12} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <Typography variant="title">ABOUT ME</Typography>
                  <div style={{ background: "#06AED4", width: "20%", height: "4px" }}></div>
                </Grid>
                <Typography>
                  Hello there! Im thrilled to welcome you to my portfolio. I am a passionate and
                  versatile full-stack developer with a keen interest in exploring the latest
                  cutting-edge technologies. My journey in the world of web development has been
                  nothing short of exhilarating, and I constantly strive to enhance my skills and
                  embrace emerging trends in the industry.
                </Typography>
                <Typography variant="title">What I do!</Typography>
                <Grid container xs={12} style={{ display: "flex", gap: "20px" }}>
                  {whatTodo?.map((item) => (
                    <CardAbout
                      key={item?.id}
                      icon={item?.icon}
                      title={item?.title}
                      content={item?.content}
                      color={item?.color}
                    />
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
