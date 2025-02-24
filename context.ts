import React from 'react';
import mapboxgl from 'mapbox-gl';

import { Source, Layer } from './type';

interface MapChildState {
    map?: mapboxgl.Map;
    mapStyle?: mapboxgl.MapboxOptions['style'];
    mapContainerRef?: React.RefObject<HTMLDivElement>;
    setSource: (source: Source) => void;
    getSource: (sourceKey: string) => Source | undefined;
    removeSource: (sourceKey: string) => void;
    isSourceDefined: (sourceKey: string) => boolean;
    isMapDestroyed: () => boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const initialMapChildState: MapChildState = {
    map: undefined,
    mapContainerRef: undefined,
    mapStyle: 'mapbox://styles/mapbox/streets-v11',

    setSource: noop,
    getSource: () => undefined,
    removeSource: noop,
    isSourceDefined: () => false,
    isMapDestroyed: () => false,
};

export const MapChildContext = React.createContext(initialMapChildState);


interface SourceChildState {
    map?: mapboxgl.Map;
    mapStyle?: mapboxgl.MapboxOptions['style'];
    sourceKey?: string;
    isMapDestroyed: () => boolean;

    setLayer: (layerKey: string, method: (layer: Layer | undefined) => Layer | undefined) => void;
    getLayer: (layerKey: string) => Layer | undefined;
    removeLayer: (layerKey: string) => void;
}

const initialSourceChildState: SourceChildState = {
    map: undefined,
    mapStyle: 'mapbox://styles/mapbox/streets-v11',
    sourceKey: undefined,
    isMapDestroyed: () => false,

    setLayer: noop,
    getLayer: () => undefined,
    removeLayer: noop,
};

export const SourceChildContext = React.createContext(initialSourceChildState);
