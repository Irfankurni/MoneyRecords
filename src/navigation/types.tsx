import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Register: undefined;
    HomeTab: NavigatorScreenParams<HomeTabParamList>;
    Detail: { id: string };
    Add: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
    Home: undefined;
    Income: undefined;
    Outcome: undefined;
    History: undefined;
    Profile: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

export type HomeParamList = {
    Add: undefined;
}

export type HomeScreenProps<T extends keyof HomeParamList> =
    CompositeScreenProps<
        StackScreenProps<HomeParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}