import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to My Profile!
      </Text>

      <Image
        source={require('../../assets/profile.png')}
        style={styles.profileImage}
      />

      <Text style={styles.name}>
        Reuven Reyes
      </Text>

      <Text style={styles.introduction}>
        Hello! I am Reuven Reyes, a student who enjoys
        learning programming and creating mobile applications.
        I am interested in improving my skills and learning
        new technologies.
      </Text>

      <View style={styles.interestsContainer}>
        <Text style={styles.interestsTitle}>
          My Interests
        </Text>

        <Text style={styles.interest}>
          • Playing online games
        </Text>

        <Text style={styles.interest}>
          • Watching movies
        </Text>

        <Text style={styles.interest}>
          • Learning programming
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 25,
  },

  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: '#2F80ED',
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
  },

  introduction: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  interestsContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D0D7DE',
  },

  interestsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 12,
    textAlign: 'center',
  },

  interest: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
});
