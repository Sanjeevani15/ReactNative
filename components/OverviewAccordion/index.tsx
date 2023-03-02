import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// if (Platform.OS === 'android') {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }

export default function OverviewAccordion({
  title,
  content,
}: {
  title: string;
  content: any;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const [numReviewsToShow, setNumReviewsToShow] = useState(1);
  const isShowAll = numReviewsToShow === content.length;

  const toggleShowAll = () => {
    if (isShowAll) {
      setNumReviewsToShow(1);
    } else {
      setNumReviewsToShow(content.length);
    }
  };

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View
          style={{
            height: 52,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 14,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "500" }}>{title}</Text>
          <Icon
            name={isOpen ? "angle-down" : "angle-right"}
            size={28}
            color="#000"
          />
        </View>
      </TouchableWithoutFeedback>
      {isOpen && (
        <View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#BFBFBF",
              borderBottomWidth: 1,
              borderBottomColor: "#BFBFBF",
            }}
          >
            <View style={{ paddingHorizontal: 14, paddingVertical: 13 }}>
              <Text style={{ fontWeight: "600", fontSize: 14 }}>Reviews</Text>
            </View>
            <View style={{ paddingHorizontal: 14 }}>
              {/* {content.map((reviewdata: any) => ( */}
              {content
                .slice(0, numReviewsToShow)
                .map((reviewdata: any, index: number) => (
                  <View style={{ paddingVertical: 13 }} key={reviewdata.id}>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 13,
                        marginBottom: 10,
                      }}
                    >
                      {reviewdata.reviewBy}:
                    </Text>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 12,
                        color: "#5D5D5D",
                      }}
                    >
                      {reviewdata.review}
                    </Text>
                  </View>
                ))}
            </View>
          </View>
          {/* <View
            style={{
              height: 52,
              display: "flex",
              justifyContent: "center",
              paddingHorizontal: 14,
              alignItems: "flex-end",
            }}
          >
            <Text style={{color: '#F54061', fontSize: 14, fontWeight: '600'}}>Show All</Text>
          </View> */}
          {content.length > 1 && (
            <View
              style={{
                height: 52,
                display: "flex",
                justifyContent: "center",
                paddingHorizontal: 14,
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{ color: "#F54061", fontSize: 14, fontWeight: "600" }}
                onPress={toggleShowAll}
              >
                {isShowAll ? "Show Less" : "Show All"}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
