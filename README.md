## Для старта

Запустить:

```bash
  npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Как добавить иконки

1. добавить svg иконки по пути './src/shared/assets/icons'
2. запустить `npm run icons`
3. Иконки отформатируются, сохранятся в [formatted](src/shared/assets/icons/formatted), сгенерируется css файл.
4. Использовать компонент `<IconBase name={name}/>`, где name - сгенерированное имя иконки по имени svg файла
5. Помимо этого в [icons.ts](src/shared/types/icons.ts) обновятся типы иконок, откуда они зарегистрированы в [global.d.ts](global.d.ts), и можно использовать тип `Icons` без импорта

ВНИМАНИЕ. Не прогонять иконки из [formatted](src/shared/assets/icons/formatted) еще раз, могут возникнуть непредвиденные ошибки, если по какой-то причине, нужно обновить эти иконки, придется брать исходник. Либо изменить скрипт [formattingIcons.mjs](scripts/formattingIcons.mjs), что бы исходники не удалялись!
