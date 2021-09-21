import FontAwesome from '@/library/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {config} from '@vue/test-utils';

FontAwesome.init();

config.global.components.fa = FontAwesomeIcon;

config.global.mocks.$t = (key: string) => key;
