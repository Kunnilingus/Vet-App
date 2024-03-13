import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";
  return {
    mode: options.mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    // externals: {
    //   "@yandex/ymaps3-types": [
    //     `promise new Promise((resolve) => {
    //         if (typeof ymaps3 !== 'undefined') {
    //           return ymaps3.ready.then(() => resolve(ymaps3));
    //         }
    //         const script = document.createElement('script');
    //         script.src = "https://api-maps.yandex.ru/v3/?apikey=b0626ff1-3c76-4092-89f4-a8c2bd64b279&lang=ru_RU";
    //         script.onload = () => {
    //           ymaps3.ready.then(() => resolve(ymaps3));
    //         };
    //         document.head.appendChild(script);
    //       })`,
    //   ],
    // },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && "inline-source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
