---
order: 1
title: 自定义高度
---

自定义空行的高度

```jsx
import { EmptyLine } from 'antd-advanced';

ReactDOM.render(
  <div>
    第一行文字
    <EmptyLine height={50} />
    第二行文字
  </div>,
  mountNode,
);
```
