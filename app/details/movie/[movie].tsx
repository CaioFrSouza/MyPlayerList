import {useLocalSearchParams} from "expo-router";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import ThemedApplicationBackground from "@/components/misc/ThemedApplicationBackground";
import {IMovieData} from "@/interfaces/IMovieData";
import React, {useEffect, useState} from "react";
import {MovieInfoService} from "@/Services/MovieDetailsService";
import {useColorScheme} from "@/hooks/useColorScheme";
import {Colors} from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {IMAGE_URL} from "@/constants/Env";
import {Strings} from "@/constants/Strings";
import {GenreCard} from "@/components/cards/GeneresCard";

function MovieScreen(){
    const { movie } = useLocalSearchParams<{ movie: string }>();
    const [data, setData] = useState<IMovieData>();

    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];

    const strings = Strings.Pt_Br;

    const get = async  () => {
        const d = {} as IMovieData;
        const detailsRequest = await MovieInfoService.details(movie);
        console.log(detailsRequest.data);
        d.detailsMovie = detailsRequest.data;
        setData(d);
    }

    useEffect(() => {
        get();
    }, []);

    if(!data)
        return <ThemedApplicationBackground>
            <></>
        </ThemedApplicationBackground>

    return <ScrollView style={styles.page}>
            <Image style={styles.topImage} source={{uri: `${IMAGE_URL}/${data.detailsMovie.backdrop_path}`}}/>
            <View style={styles.conainer}>
                <Text style={styles.title}>{data?.detailsMovie.title}</Text>
                <View style={[styles.row, styles.subtitleContainer]}>
                    <View style={styles.row}>
                        <FontAwesome name="clock-o" size={16} color={colors.secondaryText} />
                        <Text style={[styles.secondaryText, {color:colors.secondaryText}]}>{data.detailsMovie.runtime}</Text>
                    </View>

                    <View style={styles.row}>
                        <FontAwesome name="star" size={16} color={colors.secondaryText} />
                        <Text style={[styles.secondaryText, {color:colors.secondaryText}]}>{data.detailsMovie.vote_average.toFixed(2)} (IMDb)</Text>
                    </View>
                </View>
                <View style={styles.divider}/>

                <View style={styles.sectionRow}>
                    <View>
                        <Text style={[styles.sectionTitle, {fontSize: 14}]}>{strings.ReleaseDate}</Text>
                        <Text style={styles.relaseDate}>{new Date(data.detailsMovie.release_date || "").toLocaleDateString("ptBR")}</Text>
                    </View>

                    <View style={{maxWidth: "50%"}}>
                        <Text style={[styles.sectionTitle, {fontSize: 14}]}>{strings.Genre}</Text>
                        <View style={styles.genereList}>
                        {
                            data.detailsMovie.genres.map(e => <GenreCard name={e.name} key={e.id}/>)
                        }
                        </View>
                    </View>
                </View>
                <View style={styles.divider}/>
                <View>

                    <Text style={styles.sectionTitle}>{strings.Synopsis}</Text>
                    <Text style={styles.synopsis}>{data.detailsMovie.overview}</Text>
                </View>
            </View>
        </ScrollView>
}

const styles = StyleSheet.create({
    genereList: {
        flexDirection:"row",
        gap: 10,
        flexWrap:"wrap",
    },
    relaseDate: {
        color:"white",
        fontFamily: "LatoRegular" // alterar
    },
    sectionRow:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    synopsis: {
        fontSize: 14,
        letterSpacing: .5,
        color:"white",
        marginBottom: 12,
        fontFamily: "LatoRegular" // alterar
    },
    sectionTitle: {
        fontSize: 18,
        letterSpacing:1,
        color:"white",
        marginBottom: 12,
        fontFamily: "LatoRegular" // alterar
    },
    divider: {
        width:"100%",
        height:1,
        backgroundColor:"#515151",
        marginVertical: 14,
},
    page: {
        backgroundColor: "#15141F",
        flex:1,
    },
    topImage: {
        height:345.67,
        width:"100%",
        objectFit:"cover",
    },
    title: {
        color:"white",
        fontSize: 28.91,
        letterSpacing: 2
    },
    subtitleContainer: {
        marginTop: 10,
    },
    row: {
        flexDirection:"row",
        gap: 10,
    },
    conainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    secondaryText: {
        fontFamily: "LatoRegular",
        fontSize: 14.45,
        letterSpacing: 2,
    }
})

export default MovieScreen;