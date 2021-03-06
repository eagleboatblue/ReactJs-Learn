# Markdown Cheat Sheet

ππβοΈββπΎππππππ‘β οΈππ’βοΈβ»οΈπ₯βοΈπ β‘οΈππ―πβͺπ

Table of Contents
- [Markdown Cheat Sheet](#markdown-cheat-sheet)
  - [Basic Syntax](#basic-syntax)
    - [Heading](#heading)
    - [Bold](#bold)
    - [Italic](#italic)
    - [Blockquote](#blockquote)
    - [Ordered List](#ordered-list)
    - [Unordered List](#unordered-list)
    - [Code](#code)
    - [Horizontal Rule](#horizontal-rule)
    - [Link](#link)
    - [Image](#image)
  - [Extended Syntax](#extended-syntax)
    - [Table](#table)
    - [Fenced Code Block](#fenced-code-block)
    - [Footnote](#footnote)
    - [Heading ID](#heading-id)
    - [My Great Heading {#custom-id}](#my-great-heading-custom-id)
    - [Definition List](#definition-list)
    - [Strikethrough](#strikethrough)
    - [Task List](#task-list)
  - [Center Image](#center-image)
  - [Create Table of contents](#create-table-of-contents)
  - [Markdown emotion icons](#markdown-emotion-icons)
  - [insert icon](#insert-icon)
  - [mermaid diagram](#mermaid-diagram)


Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It canβt cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruberβs original design document. All Markdown applications support these elements.

### Heading
```
# H1
## H2
### H3
```
### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![alt text](./images/python-keywords.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Fenced Code Block

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x]Write the press release
- [ ] Update the website
- [ ] Contact the media

## Center Image

<center><img src="images/application.png"/></center>

## Create Table of contents

Command Palette... > Markdown All in One: Create Table of Contents

## Markdown emotion icons
π [All icons](https://www.webfx.com/tools/emoji-cheat-sheet/) θΏη―ζη« εΎζ£οΌεΎε?Ήζδ½Ώη¨γ

:heavy_check_mark: βοΈζ­£η‘?
:x: βιθ――
:+1: π θ΅ηΎ
:-1: π ιθ§
:smile: π εΎ?η¬
:cry: π’ ε­ζ³£
:rose: πΉη«η°
:heart: β€οΈεΏη±
:a: π°οΈε­ζ―
:ok: πε₯½
:ballot_box_with_check: βοΈζ­£η‘?
:white_check_mark: β
:arrow_right: β‘οΈε³η?­ε€΄
:arrow_forward: βΆοΈεΌε§
:repeat: πεε€
:floppy_disk: πΎε¨ε­
:pushpin:πεΎι
:bulb: π‘ι‘Ώζ
:memo: πθ?°ε½
:warning: β οΈθ­¦ε
:fast_forward: β©εΏ«θΏ
:rewind: βͺεζΎ
:copyright: Β©οΈ 
:hammer: π¨ζ¦ε€΄
:butterfly: π¦
:triangular_ruler:πδΈθ§ε°Ί
:fire:π₯η«η°
:email:βοΈι?δ»Ά
:recycle:β»οΈεζΆ
:notebook:π
:ledger:π
:wastebasket:π
:question:β
:bug:π
:phone:βοΈ
:phone-alt:β
:exclamation:βοΈ
:point_up:βοΈ
:point_right:π
:ok_hand:π

β‘οΈππβοΈβββοΈππ¨π‘βοΈπππππΎπππβ οΈππ’β»οΈπ₯π ππ―βοΈβοΈ

##  insert icon
![ad](faicons/svgs/regular/smile.svg)
<img src="faweb/svgs/regular/address-book.svg" style="background-color:lightblue;" height="20"> reduce the icon size.

##  mermaid diagram

[Mermaid Samples](mermaid.md)

```mermaid
graph TB
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    style C fill:#f3ac30,stroke:#333,stroke-width:3px
    B --> G[/Another/]
    C ==>|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
    style D fill:#4adff6,stroke:#333,stroke-width:2px
    style E fill:#4adff6,stroke:#333,stroke-width:2px
    style F fill:#4adff6,stroke:#333,stroke-width:2px

    subgraph section
        C
        D
        E
        F
        G
    end
```
