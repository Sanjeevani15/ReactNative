import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StarRating from "react-native-star-rating";

export default function Rating({ doctorrating }: { doctorrating: any }) {
  return (
    <View>
      <StarRating
        disabled={true}
        maxStars={5}
        rating={doctorrating}
        starSize={15}
        fullStarColor="#FCD12A"
        emptyStarColor="gray"
        halfStarEnabled={true}
        starStyle={{marginRight: 2, marginLeft: 1}}
      />
    </View>
  );
}
