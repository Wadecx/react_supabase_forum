# ETAPES D'INITIALISATION DU PROJET

## ETAPE 1 :

Installer les dépendances dont nous avons besoin :

```
npm i @supabase/supabase-js
```

```
npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
```

## ETAPE 2 :

Configurer tailwindcss :

- Dans le fichier tailwind.config.js, ajouter le code suivant :

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Dans le fichier index.css, ajouter le code suivant :

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ETAPE 3 :

Importer dans le .env les variables supabase : SUPABASE_URL / SUPABASE_ANON_KEY

## ETAPE 4 :

Dans le dossier libs/supabase, créer un fichier index.js et y importer le package supabase :

```
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

export default supabase
```
