import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import todoReducer from './slices/todoSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['tasks']
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
    reducer: {
        todos: persistedReducer
    },
    
})

export const persistor = persistStore(store)