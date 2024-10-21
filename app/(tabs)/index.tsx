import {HomeTitle} from '@/components/headers/HomeTitle';
import ThemedApplicationBackground from '@/components/misc/ThemedApplicationBackground';
import {TredingsSliderComponent} from '@/components/trendings/TredingsSliderComponent';
import {Strings} from '@/constants/Strings';
import { StyleSheet, ScrollView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useEffect, useState} from "react";
import {IHomeData} from "@/interfaces/IHomeData";
import {MovieListService} from "@/Services/MovieListService";
import {TvListService} from "@/Services/TvShowListService";

export default function HomeScreen() {
    const [data, setData] = useState<IHomeData>();
    const get = async () => {
        const d = {} as IHomeData;
        const popularMovieRequest = MovieListService.popular();
        const popularSerieRequest = TvListService.popular();
        const promises = await Promise.all([popularMovieRequest, popularSerieRequest]);
        d.movie = promises[0].data;
        d.series = promises[1].data;
        setData(d);
    }
    useEffect(() => {
        get()
    },[]);
    const strings = Strings.Pt_Br;
    return (
        <>
            <GestureHandlerRootView style={{flex: 1}}>
                <ThemedApplicationBackground>
                    <>
                        <ScrollView>

                            <HomeTitle {...strings} />
                            <TredingsSliderComponent baseRouter={"details/movie"} title={strings.TrendingMovieTitle} imagesSlider={data?.movie?.results || []}/>
                            <TredingsSliderComponent baseRouter={"details/tv"} title={strings.TrendingTVSeriesTitle} imagesSlider={data?.series?.results || []}/>
                            {/*<TredingsSliderComponent title={"Tema 1"} imagesSlider={trendingsData.imagesSlider}/>*/}


                            {/*<TredingsSliderComponent title={"Tema 2"} imagesSlider={trendingsData.imagesSlider}/>*/}


                            {/*<TredingsSliderComponent title={"Tema 3"} imagesSlider={trendingsData.imagesSlider}/>*/}
                        </ScrollView>

                    </>
                </ThemedApplicationBackground>
            </GestureHandlerRootView>
        </>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
