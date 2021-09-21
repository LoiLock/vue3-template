import {ComputedRef, computed, reactive} from 'vue';
import axios from '@/library/http/AxiosHttpClient';

const state = reactive({
    apiToken: null as string | null,
});

const setApiToken = (token: string | null): void => {
    if (token) {
        state.apiToken = token;

        localStorage.setItem('api_token', token);
    } else {
        state.apiToken = null;

        localStorage.removeItem('api_token');
    }
};

const apiToken = computed(() => {
    const localToken = localStorage.getItem('api_token');

    if (!state.apiToken && localToken) {
        setApiToken(localToken);
    }

    return state.apiToken;
});

const isAuthenticated = computed(() => apiToken.value !== null);

const login = async (email: string, password: string): Promise<void> => {
    try {
        const {data} = await axios.post('/auth/login', {
            email,
            password,
        });

        setApiToken(data.api_token);
    } catch (e) {
        setApiToken(null);
    }
};

const logout = (): void => {
    setApiToken(null);
};

export interface AuthStore {
    apiToken: ComputedRef<string | null>,
    login: (email: string, password: string) => Promise<void>,
    logout: () => void,
    isAuthenticated: ComputedRef<boolean>,
}

export default (): AuthStore => ({
    apiToken,
    login,
    logout,
    isAuthenticated,
});
