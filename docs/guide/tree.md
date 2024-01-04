---
nav:
  title: 组件
  order: -1
group:
  title: 数据展示
  order: 2
---

# Tree

### 何时使用
在antd的基础以及cbdes业务的基础上，对search进行封装

### 代码演示
<code src="./codeSec/tree.tsx">tree代码演示</code>

### Config

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowDrop | 是否允许拖拽时放置在该节点 | ({ dropNode, dropPosition }) => boolean | - |
| autoExpandParent | 是否自动展开父节点 | boolean | false |
| blockNode | 是否节点占据一行 | boolean | false |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false |
| checkedKeys | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置 `checkable` 和 `checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | string\[] \| {checked: string\[], halfChecked: string\[]} | \[] |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false |
| defaultCheckedKeys | 默认选中复选框的树节点 | string\[] | \[] |
| defaultExpandAll | 默认展开所有树节点 | boolean | false |
| defaultExpandedKeys | 默认展开指定的树节点 | string\[] | \[] |
| defaultExpandParent | 默认展开父节点 | boolean | true |
| defaultSelectedKeys | 默认选中的树节点 | string\[] | \[] |
| disabled | 将树禁用 | boolean | false |
| draggable | 设置节点可拖拽，可以通过 `icon: false` 关闭拖拽提示图标 | boolean \| ((node: DataNode) => boolean) \| { icon?: React.ReactNode \| false, nodeDraggable?: (node: DataNode) => boolean } | false |
| expandedKeys | （受控）展开指定的树节点 | string\[] | \[] |
| fieldNames | 自定义节点 title、key、children 的字段 | object | { title: `title`, key: `key`, children: `children` } |
| filterTreeNode | 按需筛选树节点（高亮），返回 true | function(node) | - |
| height | 设置虚拟滚动容器高度，设置后内部节点不再支持横向滚动 | number | - |
| icon | 自定义树节点图标。 | ReactNode \| (props) => ReactNode | - |
| loadData | 异步加载数据 | function(node) | - |
| loadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | string\[] | \[] |
| multiple | 支持点选多个节点（节点本身） | boolean | false |
| rootStyle | 添加在 Tree 最外层的 style | CSSProperties | - |
| selectable | 是否可选中 | boolean | true |
| selectedKeys | （受控）设置选中的树节点，多选需设置 `multiple` 为 true | string\[] | - |
| showIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |
| showLine | 是否展示连接线 | boolean \| {showLeafIcon: boolean \| ReactNode \| ((props: AntTreeNodeProps) => ReactNode)} | false |
| switcherIcon | 自定义树节点的展开/折叠图标 | ReactNode \| ((props: AntTreeNodeProps) => ReactNode) | - |
| titleRender | 自定义渲染节点 | (nodeData) => ReactNode | - |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一） | array&lt;{key, title, children, \[disabled, selectable]}> | - |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true |
| onCheck | 点击复选框触发 | function(checkedKeys, e:{checked: boolean, checkedNodes, node, event, halfCheckedKeys}) | - |
| onDragEnd | dragend 触发时调用 | function({event, node}) | - |
| onDragEnter | dragenter 触发时调用 | function({event, node, expandedKeys}) | - |
| onDragLeave | dragleave 触发时调用 | function({event, node}) | - |
| onDragOver | dragover 触发时调用 | function({event, node}) | - |
| onDragStart | 开始拖拽时调用 | function({event, node}) | - |
| onDrop | drop 触发时调用 | function({event, node, dragNode, dragNodesKeys}) | - |
| onExpand | 展开/收起节点时触发 | function(expandedKeys, {expanded: boolean, node}) | - |
| onLoad | 节点加载完毕时触发 | function(loadedKeys, {event, node}) | - |
| onRightClick | 响应右键点击 | function({event, node}) | - |
| onSelect | 点击树节点触发 | function(selectedKeys, e:{selected: boolean, selectedNodes, node, event}) | - |