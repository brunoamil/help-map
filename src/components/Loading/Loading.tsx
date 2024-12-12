import {ActivityIndicator} from 'react-native';

import {S} from './LoadingStyle';
import {colors} from '@/styles/theme';

export function Loading() {
    return <ActivityIndicator color={colors.green.base} style={S.container} />
}