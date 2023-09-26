import { PortableText } from "@portabletext/react";
import { Link, Text, View } from "@react-pdf/renderer";

export const RichPDFTextComponents = (style: any) => {
  return {
    types: {},
    list: {
      bullet: ({ children }: any) => {
        return (
          <View
            style={{
              flexDirection: "column",
              marginTop: 4,
              paddingLeft: 10,
              ...style,
            }}
          >
            {children.map((child: any) => {
              const nestedValue = child.props.value;
              delete nestedValue["listItem"];

              nestedValue.children.unshift({
                text: "• ",
                _key: "e428c25b3720",
                _type: "span",
              });

              return (
                <View
                  key=""
                  style={{
                    flexDirection: "row",
                    marginBottom: 4,
                  }}
                >
                  <PortableText
                    value={nestedValue}
                    components={RichPDFTextComponents({
                      ...style,
                    })}
                  />
                </View>
              );
            })}
          </View>
        );
      },
    },
    block: {
      normal: ({ children }: any) => {
        return <Text style={...style}>{children}</Text>;
      },
    },
    marks: {
      link: ({ children, value }: any) => {
        return (
          <Link style={...style} src={value.href}>
            {children}
          </Link>
        );
      },
      em: ({ children }: any) => {
        return (
          <Text style={{ ...style, fontStyle: "italic" }}>{children}</Text>
        );
      },
      strong: ({ children }: any) => {
        return (
          <Text
            style={{
              ...style,
              fontWeight: `${style?.fontWeight == "light" ? "normal" : "bold"}`,
            }}
          >
            {children}
          </Text>
        );
      },
    },
  };
};
