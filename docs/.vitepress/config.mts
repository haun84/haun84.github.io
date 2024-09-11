import { defineConfig } from 'vitepress'
import { shared } from './config/shared.ts'
import { en } from './config/en.ts'
import { ko } from './config/ko.ts'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    ko: { label: '한국어', ...ko }
  }
})