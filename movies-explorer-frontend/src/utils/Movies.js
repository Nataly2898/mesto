const movies = [
  {
    id: "1",
    name: "33 слова о дизайне",
    image:
      "https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1664150400&Signature=hLDDX~RpyV2mnro2l8No5htPq2kYsLp3KqoB4K7KkPWx7Jz3F2KfxruSskC~tS~a-iTAecT0Prxl5M2~8rA078iQjwj3WjiA~bsJsdziA0IaSEqzU5oF5bQPZrifpRiggQR4ok2DxFkMgol8xsF8A-uVYJluIL4yQjwIXiC2a3yn6MYmuc~HNv2nrLdZkz9otFGVXix-syHl5E6DOQcnC5FbPjzLczVOidW0Eu9myAz5zEiAssCTG3WiwP7m0R4STOeNN1UnpvGdEUeb7iNXOOlhfsNiH~3ddiXU8LQbM0iztf2Ek6kLSa2qQPZJDGFAIpS7Y2xejysXPhm0GYLySA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: true,
  },
  {
    id: "2",
    name: "Киноальманах «100 лет дизайна»",
    image:
      "https://s3-alpha-sig.figma.com/img/90ba/2e4b/e072f3f38937c7f5d592d64f3fa59f33?Expires=1664150400&Signature=ZZ6okalD5SLU7LIlCzcZECV2fzqkpU61R3MeP-mgZxoRPwTno6lNi0U~7ZD7jJ1vF32vv6FphA5dYYapdeTqyjCot-PU27Z~bPJpfQy5Ekmmmb~BP2REoeqC3L89AHUJ1zJICMXp5bppZhLLTRimvCS3xCcoKWEC4ejuUQRboAqS1VFwAqsrlardW6gL9Wzxf8~lPstA4y6LPi18GXtSnP-DqK4fun-eIoRn0YIDNO2rJPH~ymv0UqDPgO8mHsxNgoCE0RkrMLYHOcuX9qZxrh8XpBZ2v4xqfvNvIMoUO1uB7W7t8u6Dnl15O9TagAGOP8MnnywsGrTPkzaozyTPIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: true,
  },
  {
    id: "3",
    name: "В погоне за Бенкси",
    image:
      "https://s3-alpha-sig.figma.com/img/7501/fcae/58fcf299e5a04c29cb37e6280c83da16?Expires=1664150400&Signature=b-ARc~IdYlUMy~ZuzUcg0uFrx~BOpz5n10-acTqGbpK6NAT-4VAHjJIIApNyLNu5EfH55BxwLuLtHzsa8tJzAgGW6CXl1K5uNXF3jUwWL2QtliksZObzz4n--cGxbxxlTtY2U3OSZniiTO8RZhRR2Ru8~G7pX9ttdvyPQy6YFajn0Z6GZuubBKKXePAkvQzu-lFwugfoxFji0Oi2cuA4n~yBUOptE010-VBcj2ILpL6SKkB2COObhwhcEpYgOtiBbA0FnoK0qV40MP~~aY-6CxOKIsnarxIDu8r~pbZoG0WU64cq0So~zmRCWUu3mR~tinP0o-nLVEy2qsMxxCb2FQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: true,
  },
  {
    id: "4",
    name: "Баския: Взрыв реальности",
    image:
      "https://s3-alpha-sig.figma.com/img/96cc/9d30/2e6653f8a2dbac83b4795cc1e846a243?Expires=1664150400&Signature=bbT1nsZn0sBNP0cdEjwZ4RfRgAp~2DyT5SSyZh63u0D4Td2Ds-QsRBBq6OMlLQRdDlB2F48ffSUUrqK6DJSwzpj1WwYDP4FPT7VdCNTAkML8nEyXNsmSnzSnePFwohBQf~JkAHtf~TYK7ctvWkrrfHmAr-Rpxzwn7VG464KMkGspe79--07VmuOVSoQQcUU2bm2ylWzmv4D7-nyxYjiOsY7yYGH~UOWLmB1zK~KT4f8t72vl~4-RFJwcAlL9u6CrujBerxcVB-UwOejg~DZPYCGj843BbtI5U5sQ8vkAP16Sw1gEHAdW9TduNIVoiM~V52B-VBBGJWOqRcJpivBFWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "5",
    name: "Бег это свобода",
    image:
      "https://s3-alpha-sig.figma.com/img/b5e4/a6cb/ff07e856bc14f2c67fd3d453609875e8?Expires=1664150400&Signature=RDDv14qoK4dewxYebFUhneymOW8rX~3kz358t55uDY3zM52SIlnaQ56zfRd8sh6jVlZ8ER~1sAbI2A~HEPn73T15hkkx1DAbSxsqfMX9eJTxS-MX79VhQ3L5~vFZBbTfMr6wSsiYRdg4rr1Mc6GWr4y3YBE6-T8JamvL83iifo~4ksoyX2Bdj1YBoDviwq7~Sq8V1hr2c~xvXteP5FLHKrqQWsb8NsiIyVUFTc4bRbOuhKCn6s5i2~DNgd~GO6HoXduiH9z1xN3WiAmt4c-k0iSjk06WPwqNzsSaxxNwVTdj1adrwQQwgW-IaplEz7ZP1NFjC1NDRz22ee83oJM~ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "6",
    name: "Книготорговцы",
    image:
      "https://s3-alpha-sig.figma.com/img/199d/35fd/ed1213c8b6d45652874df917fdcefb3b?Expires=1664150400&Signature=FrbTtZ9743oXpS2ZeGBkGsn2vnClNPGpjPPXVY6Ba2VqJWrhXLHvy4iL3Bark2w9J0fdyudIIN35tKnqmgkpSddd85REZwir7II13~QNOExdx6YMGpt209swShFi2o3xkjwuqRwJKqFJDIRVmcC4Hc0xUbI0kwPCxByFMbPKb6bZ3FQ5bWSVXZrMbDExs9gkHAxXqa7TWIn7VmmEG4PYskebKWQ4UgWWLUv40uVhXFc5zMbCuuH4JFnqHmid~pO7FRXzGrcIIURiuyAxwvfO7winRHkJyxWqfa3NVYu7VvYcTwSGvBvvL63oLhB3ZL5oKWbBFnphJv3OJDslrBiLxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "7",
    name: "Когда я думаю о Германии ночью",
    image:
      "https://s3-alpha-sig.figma.com/img/16ca/4833/dee0e587ee02e0b9181fbac58ce0aeee?Expires=1664150400&Signature=Cpb5ahOcbox8kw3FqZYlmkXOaDjRjuJdDpLGWCCFJhrzieauPglDEifymkd-k9RKiWL9ezK2iqI6K4whwQzAwrQDYKBjm-nwCKMvsJZ8iHDUZ8Qa0~nbIXJUYFLDHrfTYBQNaUSRJqNDYeS665xd0Q-O5ewn2FRJ7YFqcJHpS0xstWvLSXoCuzy~jkmeurmUrYbpKXtO0~nhl676oX6Kat2oR-oRDY~y4LztdOohIE8LWeKlk~xvd9O8ABHSStbSULVv5zXhw3b30cetkG6wcdXpl-0L1lLKWa91EmEH7m86cENZY3e7GSw27m8FE2gi411GymcmwApEs6RGzt8XMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "8",
    name: "Gimme Danger: История Игги и The Stooges",
    image:
      "https://s3-alpha-sig.figma.com/img/db51/87fa/f8c41998d6d82176e93f868814bf1d2b?Expires=1664150400&Signature=E0Zhe5UL1U7CRX1K3XCuAQcI9hUNmp~5sqiBUUU2wVKL5mxedbKYZFL7cmsjIotwyplCwwJYn-wHbkBymHF3CzZr~DHSYV5j2~O28SYlsY05MK2wTi1Rdu17d8f0mEF21ARia9lJ8BVuTnyXy4xj04vr9GDimYAlKkNGeXBdixh5qWqUKw1SFKuenKeNTLuUcXnYxwdtCDPx6Xe3hxVOJqrhoNS1qkSu06DTB~oIEjh4cg3iAlnQdaegGYYTFRQf9gI8VLoF0-TWXPJP~UmymqFSG7XNwtWdN7stgHc~~w473lJVtwdqiAkKYILuheBC0z8o-YW-WA3hBtzXxk77jQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "9",
    name: "Дженис: Маленькая девочка грустит",
    image:
      "https://s3-alpha-sig.figma.com/img/8604/c3a8/492a130e904f2edf96264863e930e51f?Expires=1664150400&Signature=Uzsj93lltQd4yitU3GJHu8zlUqi4-8~7xa261oLNFZwCqxPDhQ7WVin7GwfmabfKVWrZSKn1X5UuMmd36gxGI7pSJrWYPi34CyT8dYktkQNHaKTrADGDIRKHeAUhvDKkNYX643vstaTdMWV5hXw4UfcnANTi-DXZtLdfiY~0odLtpxSY9aCRqiogOFBmEWV66p5Swa~1EmORZ8FBgQK6FF0-NwvAAtDRGKUz7XbD8ncmgr57Q4~blNh7jzoZCgYQBA5l7Iis~9mpuz9GLggafrewRWWGoe-KWIyre02w9RJUFDUkPWkn4Jj5LxuwF6orQiRXLRllGRTBP8urIZ6ygg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: true,
  },
  {
    id: "10",
    name: "Соберись перед прыжком",
    image:
      "https://s3-alpha-sig.figma.com/img/532b/0b33/a7e2023e9428929e8632172735ff18f5?Expires=1664150400&Signature=CeybOq6MzhEenqyaCgUQ3x38EBx8KUdxbpitSoxTzdeA2cKN54uPLc0iP0vypufsU6Q4goyas6mbxL9SQq9CAltWOC5nAKUGGTMLYfuSoVhwnQBBnr2-q9OvCn3NEpG6u5YQ8HOscgyib6zzrdonsq9yCNM1aJyBAeSl2zAda5lkvXgaUglIKL0LLvVfEY1xFDTJ5qe~WH~4LnlyNsJC382WWajDoboRADKq0SHc9jZEr5bTEOp5JExGpwBzRgvXQ1om3Vp~GAxt0eaEDxkuYUm8msZtzbFHd318RauavfE7LMJzUtj14VfiD~T8y6ltnKnQom5rPF6r39Ew3afW4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: true,
  },
  {
    id: "11",
    name: "Пи Джей Харви: A dog called money",
    image:
      "https://s3-alpha-sig.figma.com/img/ff18/63df/9c469b036f5505dd9a947241f21f8245?Expires=1664150400&Signature=br81AB20w8UfJ9wObYFLrpa8a3bAxyflIQvcx1yOs5B-nyWKbI~RqYv~nBZrOEq79ySKQzxletRGg-JONO2Cx1II3I~AHivmqgcHzBQFxSZoJYOjIiW1CQN5rgX3oQpcr7DX2RGB9anygnffg4PZrio3JrOyzg4sqcY9NodXqeo-7b2EADOdmM8QDNu0IH3KRUl4gd-WjSJOLj9Lfi3dnsnVJrTOYjfQJrDgmGAWdeR5FATGPx2BXU7o7yBsoj4sMk6tYX5XteIiPYXxz2Xnhs82hxBVzf03XBoZ~iJk-xRxYI7szlqN8dqmKigPQSDffGmjDhdmJbqzv6X2-SHnnA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: true,
  },
  {
    id: "12",
    name: "По волнам: Искусство звука в кино",
    image:
      "https://s3-alpha-sig.figma.com/img/9f37/4383/9cbecda3e33558c8bfcc052f8002c008?Expires=1664150400&Signature=TGvG3deS3z0fs8HJ-qfy3641yfyqPl12PuWCKdFw8VCBSGS40y5kp0T2F1L1v0CxUzsvV3UkQDrKjIwqcmoIH0TrC2F1lmtNbTZDGXIrPZO68BAW8izIVdmVRpkbj4oi9MvEEbuTIBb6uAxNV5ki3n7N98tPhbf-Sw7UoH2vfA8335sIazPh7E8VE8IujWtBy77HaKpA79gcuZ2pQ9ItHnh4KH7YMc36qQNQR4s9fg35c1FatlDIdb11H8vUROgwcYGmdsJvjG8CVc1k~l-iEJltvYcKc9XpaLqWvYbLMq0UEHDBIZB7mgRFJBQgecYEDL0EAV~2zppYFGKJbT5l8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "13",
    name: "Рудбой",
    image:
      "https://s3-alpha-sig.figma.com/img/15e7/907e/a155d35bb2900a7523c41e586e62a5a7?Expires=1664150400&Signature=KadXu8he9gRomeLSfWKu8fflG99HilQE3FNbus3dIMYBbXqhi9LIFkkuGhnXt8ggRMTjHc0t8wDZOsb1RCT4ebMlYpX8Unf0kuSAvF1ZqTg9akf58KBHNPBCrIfR4nhYiMoLZF4fo5y9O96cMt8-nryDUElbL9xC2mdFOGoB03XYcQ8FXI0EU2A6z-tbRPWh6XK1dVwwk34ZvlLtQHLuRpRwptV3ib96w1uK5t~rpmLXiD4J998yiTsvCerRGFS6x2-qaxF7I6GVE5zgBybmKh1HMBb1-SLxMZvVFfUHl9hRGYcW221QPty-bfS4J0toSfzWtejYhHTs5vSdOkmOuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "14",
    name: "Скейт — кухня",
    image:
      "https://s3-alpha-sig.figma.com/img/6380/fa53/8ad8f141ae7babcf9a109cb6e6f760e7?Expires=1664150400&Signature=ftdjqaoYWPjZKEpfW8ldm8an0l3nI32C-w~T8393oqXKADCUZ0yMLxjSksbA4vnxVCpnFbBti4zMPSTgUHc6AAiGVQItfLul04rH~uBtCg-dwfQHh7wAGE63Ch-IvdRwBqw7ELj2khwQlSVCBIWPeLN6L~GKYL9WODwZokdd1gq4s6CfV8J9eOfqRtcmPx7Q14aqboQ2UxPbihOS0vl33XCNQp7bfHRbFZk0xZn8bhN~rLVLi3~QgCKguBKm4g3oCy5zhXnlQq7j90FB1AVYg2Wlyv9nD-D4W9SY6QeJIPzueJDlhZVbqdv80~rw5Q-oZYBeSsVIaYlczgJFSpke8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "15",
    name: "Война искусств",
    image:
      "https://s3-alpha-sig.figma.com/img/ab88/283d/4aab68a30ea43a46bde9dae287117202?Expires=1664150400&Signature=Tp687pF2kA2KqKJdYERAsmS-aJoac~cJnPt-DCVzEMJwVSDKIvqBupjlEUlwKd5FqTkJjzJz1S385XIQ7sUKbT0uCgS68q~omL82EMxf234WsUL~65wVe3CZwzPZpZwpNYaIB0gW7Z0gWfzs-9C-kdVIK1EWaMmbhTx8RiR8u5j1Yex62k54Coe5fh1yxRWZxfSNUdZTRVnz1~vCKw86ShjzUH2O6mvqXvlL4p0oE6kbwbwh99bLPqvTg903bjfFj18weLN6dO4TO4eIWO-Uww4Bp0ounPwg2j8XMn9KNvt4uR9zFKO-JrgXoKNofrQh5McCxkytkFeA2iJhLQNERw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
  {
    id: "16",
    name: "Зона",
    image:
      "https://s3-alpha-sig.figma.com/img/55cf/5d6f/979762a87e125d70efcb27da8d89c745?Expires=1664150400&Signature=NBzNrimXKVMONIpkZMtNU0oOSdLC~NpqWerlwgTnk5c3ngXdCPE6ThjlFAvLLZ0ACLedEB2Z1T0crPJ1HycQ0kIXGxqlfWsIekOhTNK0hdbk0bhPj6y8ZNk1cESrpTkxcgaAsxnoMZpQdnLqRDZjaDnqOxSekYuaP~Bp-9MhezCDqAKYs21Yn2dG7piF8hwuUOiobw77GIDxnpRnE3cwGjpeugFEp9k71UJCBRs86GOjq-RTt3MDhoMDqteTv4evfPu4~4g8JoZ-u-NIxqKR0S8UIV5bW5vA08ALpfZ5aFB~cBoVRYtaBIFtGgoym8RsjkrwycebFEt9LA3hAiFDzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    duration: "1ч 42м",
    saved: false,
  },
];

export default movies;
