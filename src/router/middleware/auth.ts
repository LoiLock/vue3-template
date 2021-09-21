import {NavigationGuard} from 'vue-router';
import useAuthStore from '@/store/authStore';

const auth: NavigationGuard = (to, from, next) => {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated.value) {
        next({name: 'auth.login'});

        return false;
    }

    next();
    return true;
};

export default auth;
