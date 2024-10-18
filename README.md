# Pikabu-Nickname-Modifier
## Главное. Зачем он нужен?
В условиях информационной войны, на **российском** сайте *Pikabu.ru*, комментируют и размещают  посты исключительно ~россияне~. Как иногда призывали идентифицирвать таких ~россиян~ на сайте по IP, успехов не имела, так как администрации пофиг, а IP подделать не проблема. В то же время есть отдельные патриотически настроенные пользователи, котрорые фиксируют в заметках о профиле неодyозначные действия ~такжероссиян~. А вот бы взять и раздать всем ачивки на основании их постов? Появилась идея сделать расширение для браузера, которое бы показывало комментарий рядом с ником пользователя Pikabu. Идея зрела давно, но ввиду того, что Родина призвала на работ, не связанную с IT, времени для написания рассширения не было. В конце концов, чувствуя огромную отвествтенность, начал работать над разрешеннием. Для этого добрая американская сеть нейронная модель Gemini 1.5 Pro  написала нам расширение для браузеров, работающих на движке Chromium. Так как автор не имеет опыта в JS, он во всем полагался на нейросети, немного ручками доработал, что смог понять.
## Как это работает
Грубо говоря, составляется список никнеймов на Пикабу в столбце А, и комментарий, который надо добавить к никнейму на сайте Пикабу в столбце В. Таблица размещается на Google Sheets. В настройках расширения надо указать SHEETS_ID. При открытии страницы Пикабу, расширение ищет никнеймы на странице, если никнейм есть в базе, перед ним появляется комментарий, который есть в таблице. Ввиду того, что загрузка комментариев осуществляется ассинхронно, надо нажимать на кнопку Upgrade Nicknames.
## Кто составляет ~расстрельные~ списки?
Любой пользователь может составлять свои списки. Надеюсь, наши патриотически настроенные пользователи смогут организоваться, и перенести свои заметки о пользователях в базу. Можно кооперироваться, присылать свой вариант базы. В профиле пользователя размещать SHEETS_ID, необходимый для работы расширения и ссылку на расширение. Код расширения можно копировать в свой github и делать ссылки на него.
#Для Администраторов (тех, кто составляет списки)
В Google Drive создаете таблицу (Sheets). В столбце А размещаете никнейм на пикабу, в столбце В - комментарии к этому никнейму. в остальных столбцах можно размещать что угодно, например ссылку на комментарий, который вызвал такую маркировку. Расшаривайте таблтицу:
![  ](/assets/media/1.png)
