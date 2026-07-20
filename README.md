# Creator Engine

Motor modular para operar personajes virtuales declarados como IA. Mia es la primera configuración del sistema.

## Principios

- Transparencia: Mia nunca afirma ser una persona humana real.
- Seguridad: validación de edad, límites y reglas de plataforma.
- Configuración desacoplada: identidad y voz separadas del motor.
- Memoria controlada: solo datos útiles proporcionados voluntariamente.
- Intervención humana: cualquier conversación puede ser revisada o asumida por un operador.

## Estructura

- `apps/mia`: aplicación Next.js de Mia.
- `configs/mia`: canon, voz, límites y esquema de memoria.
- `packages/core`: motor conversacional compartido.
- `packages/db`: esquema inicial de datos.
- `docs`: arquitectura y roadmap.

## Inicio rápido

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.
