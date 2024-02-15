import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const lightTheme = {
    dark: false,
    colors: {
        background: '#FCFDF6',
        text: '#1C1C1C',
        primary: '#F7C644',
        'primary-accent': 'rgba(247, 198, 68, 0.4)',
        'primary-accent-2': '#66521D',
        secondary: '#143810',
        'secondary-accent': 'rgba(20, 56, 16, 0.5)',
        'secondary-accent-2': '#B5C7B5',
        surface: '#717171',
        'surface-accent': '#CCCCCC'
    }
}

export default new Vuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            lightTheme,
        }
    }
});
