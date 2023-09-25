import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
} from "@react-pdf/renderer";
import { ResumeType } from "@/type";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { logoQuery } from "@/sanity/lib/queries";
import { LogoTypes } from "@/enums/LogoTypes";
import { Image as SanityImage } from "sanity";

const builder = imageUrlBuilder(client);

Font.register({
  family: "Lato",
  fonts: [
    {
      src: "/fonts/Lato-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/Lato-Bold.ttf",
      fontWeight: "bold",
    },
    {
      src: "/fonts/Lato-BoldItalic.ttf",
      fontWeight: "bold",
      fontStyle: "italic",
    },
    {
      src: "/fonts/Lato-Italic.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: "/fonts/Lato-Light.ttf",
      fontWeight: "light",
    },
    {
      src: "/fonts/Lato-LightItalic.ttf",
      fontWeight: "light",
      fontStyle: "italic",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    fontFamily: "Lato",
  },
  header: {
    marginVertical: "45px",
    display: "flex",
    flexDirection: "row",
  },
  headerLeft: {
    width: "40%",
    display: "flex",
  },
  headerRight: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    transform: "translateX(-50px)",
  },
  section: {
    paddingLeft: 30,
    paddingRight: 50,
    display: "flex",
    flexDirection: "row",
  },
  sectionLeft: {
    width: "40%",
    display: "flex",
  },
  sectionRight: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
  },
  redLine: {
    marginLeft: "1.5px",
    borderLeft: "solid",
    borderLeftWidth: "3px",
    borderColor: "#df0016",
    padding: "0 10px",
    color: "#595959",
    fontSize: 16,
    fontWeight: "bold",
  },
  grayLine: {
    marginLeft: "2.5px",
    borderLeft: "solid",
    borderLeftWidth: "1px",
    borderColor: "#595959",
    paddingLeft: "24px",
  },
  experienceCircle: {
    height: "6px",
    width: "6px",
    backgroundColor: "#df0016",
    borderRadius: "50%",
    marginRight: "22px",
  },
  footer: {
    backgroundColor: "#333333",
    position: "absolute",
    bottom: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "30px",
    paddingRight: "15px",
    color: "white",
    width: "100%",
    height: "17.2mm",
    alignItems: "center",
    fontSize: 9,
  },
});

interface Props {
  data: ResumeType;
  logo?: SanityImage;
}
const Resume = ({ data, logo }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerRight}>
          {data.employee?.image && (
            <Image
              style={{
                marginLeft: "100px",
                height: "120px",
                width: "120px",
                borderRadius: "50%",
              }}
              src={builder
                .image(data.employee.image)
                .width(300)
                .height(300)
                .url()}
            />
          )}
        </View>
        <View style={styles.headerRight}>
          <Text
            style={{
              marginTop: "16px",
              color: "#445663",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {data.employee?.position ?? "Stilling"}
          </Text>
          <Text
            style={{
              color: "#445663",
              fontSize: 24,
              marginVertical: 3,
              fontWeight: "bold",
            }}
          >
            {data.employee?.name ?? "Navn navnesen"}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "light" }}>
            {data.employee?.bio ?? "Om deg"}
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionLeft}>
          <Text style={styles.redLine}>Bakgrunn </Text>
          <View
            style={{
              paddingLeft: "10px",
              color: "#445663",
            }}
          >
            {data.background &&
              data.background.map((item, index) => (
                <View key={`backgound-${index}`} style={{ marginTop: "15px" }}>
                  <Text
                    style={{ fontSize: 9 }}
                  >{`(${item.from} - ${item.to})`}</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.institution}
                  </Text>
                </View>
              ))}
          </View>
          <Text
            style={[
              styles.redLine,
              {
                marginTop: "20px",
              },
            ]}
          >
            Engasjement{" "}
          </Text>
          <View
            style={{
              paddingLeft: "10px",
              color: "#445663",
            }}
          >
            {data.engagement &&
              data.engagement.map((item, index) => (
                <View key={`engagement-${index}`} style={{ marginTop: "15px" }}>
                  <Text
                    style={{ fontSize: 9 }}
                  >{`(${item.from} - ${item.to})`}</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.organisation}
                  </Text>
                </View>
              ))}
          </View>
          <Text
            style={[
              styles.redLine,
              {
                marginTop: "20px",
              },
            ]}
          >
            Fageskpertise{" "}
          </Text>
          <View
            style={{
              paddingLeft: "10px",
              color: "#445663",
            }}
          >
            {data.expertise &&
              data.expertise.map((item, index) => (
                <View key={`expertise-${index}`} style={{ marginTop: "15px" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      marginTop: "2px",
                      flexDirection: "column",
                    }}
                  >
                    {item.projects &&
                      item.projects.map((project, index) => (
                        <View key={`project-${index}`}>
                          <Text
                            style={{
                              fontSize: 9,
                              marginBottom: "1.5px",
                            }}
                          >
                            {project}
                          </Text>
                        </View>
                      ))}
                  </View>
                </View>
              ))}
          </View>
        </View>
        <View style={[styles.sectionRight, { color: "#445663" }]}>
          {sectionText("Erfaring")}
          <View
            style={{
              marginTop: "20px",
            }}
          >
            {data.experience &&
              data.experience.map((item, index) => (
                <View key={`experience-${index}`}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.experienceCircle}>
                      <div></div>
                    </View>
                    <Text
                      style={{
                        fontSize: 9,
                        marginTop: "6px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.employer}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.grayLine,
                      {
                        paddingBottom: `${
                          index == data.experience.length - 1 ? "" : "12px"
                        }`,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        marginTop: "6px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        marginTop: "2px",
                        fontWeight: "bold",
                      }}
                    >{`${item.from} - ${item.to}`}</Text>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 9,
                        marginTop: "2px",
                        fontWeight: "light",
                      }}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
              ))}
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>{data.employee?.email ?? "telefonnummer"}</Text>
          <Text style={{ marginHorizontal: "3px" }}>|</Text>
          <Text>{data.employee?.phone ?? "epost"}</Text>
        </View>

        <Image
          style={{
            height: "30px",
          }}
          src={logo && builder.image(logo).url()}
        />
      </View>
    </Page>
  </Document>
);

const sectionText = (text: String) => {
  return <Text style={styles.redLine}>{text}</Text>;
};

const ResumeView = async ({ data }: Props) => {
  const logo = await client.fetch(logoQuery(LogoTypes.PlainWhite));
  return (
    <PDFViewer
      className="absolute"
      width={"100%"}
      height={"100%"}
      showToolbar={true}
    >
      <Resume logo={logo} data={data} />
    </PDFViewer>
  );
};
export default ResumeView;
