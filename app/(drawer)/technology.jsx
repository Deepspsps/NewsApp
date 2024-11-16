import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import axios from 'axios';

export default function Technology(){
    const [articles, setArticles] = useState([]); // Stores news articles

    useEffect(() => {
        // Fetch news when the component loads
        axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1550b8e6c60042b5a0870ea6bed01635`)
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(error => {
                console.error("Error fetching news:", error); // Show error if it fails
            });
    }, []);

    const openArticle = (url) => {
        // Open the article URL in the browser
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={articles} // List of articles to display
                keyExtractor={(item, index) => index.toString()} // Unique key for each item
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => openArticle(item.url)}>
                        <View style={styles.article}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Image source={{ uri: item.urlToImage }}
                                style={styles.image} />
                            <Text>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                />
                </View>
    );
};
                
                const styles = StyleSheet.create({
                    container: { flex: 1, padding: 10, backgroundColor: '#fff' },
                    article: { marginBottom: 15, padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 5 },
                    title: { fontSize: 16, fontWeight: 'bold' },
                    image: { width: 300, height: 200, borderRadius: 5, marginBottom: 10 },
                });
                           
