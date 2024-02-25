import { TweetType } from "@/types";
import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo, EvilIcons } from "@expo/vector-icons";

type TweetProps = {
  tweet: TweetType;
};

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: number | string;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* Icon */}
      <EvilIcons name={icon} size={22} color="grey" />
      {/* Number */}
      <Text style={{ fontSize: 12, color: "grey" }}>{text}</Text>
    </View>
  );
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} ·2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="grey"
            style={{ marginLeft: "auto" }}
          />
        </View>
        <Text style={styles.content}>{tweet.content}</Text>

        {tweet.image && <Image src={tweet.image} style={styles.image} />}
        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="chart" text={tweet.impressions || 0} />
          <IconButton icon="share-apple" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  mainContainer: {
    marginLeft: 10,
    backgroundColor: "transparent",
    flex: 1,
  },
  name: {
    fontWeight: "500",
    color: "black",
  },
  username: {
    color: "grey",
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
    color: "black",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
    marginVertical: 10,
  },

  //   footer
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});

export default Tweet;
