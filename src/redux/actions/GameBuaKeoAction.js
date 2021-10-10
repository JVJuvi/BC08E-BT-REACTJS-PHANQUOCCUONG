import { DAT_CUOC, PLAY_GAME_BK, END_GAME } from '../types/GameBuaKeoType';

export const datCuoc = (ma) => {
    return {
        type: DAT_CUOC,
        ma
    }
}

export const playGameBuaKeo = () => {
    return {
        type: PLAY_GAME_BK
    }
}

export const xacDinhKetQua = () => {
    return {
        type: END_GAME
    }
}