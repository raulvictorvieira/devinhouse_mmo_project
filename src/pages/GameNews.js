import React, { useEffect, useState } from "react";
import { NewsCard } from "../components/Cards/NewsCard/NewsCard";
import { LoaderComp } from "../components/Loader";
import { Search } from "../components/Search";
import { useGameList } from "../contexts/game-context";
import { DefaultPage } from "../templates/DefaultPage";


export const GameNews = () => {
    const { state } = useGameList();
    const { news, filteredNews } = state;
    const { searchNew } = useGameList();

    const NewsToShow = filteredNews.length > 0 ? filteredNews : news;

    return (
        <>
            <DefaultPage>
                <Search search={searchNew} placeholder="Buscar notícia" />
                <main className="content-news">
                    {NewsToShow.length > 0 ? (
                        NewsToShow.map(news => (
                    <NewsCard
                        id={news.id}
                        title={news.title}
                        description={news.short_description}
                        thumb={news.thumbnail}
                        url={news.article_url}
                    />
                    ))
                    ) : <LoaderComp />}
                </main>
            </DefaultPage>
        </>
    )
}