/** 
 * fiber: 就是一个数据结构，他有很多属性
 * 虚拟 DOM 对真实DOM的一种简化
 * 一些真实DOM都做不到的事情，虚拟DOM更做不到
 * 就有了 fiber 有很多属性 希望借由 fiber 上的这堆属性 来做到一些比较厉害的事情
 * 
 * fiber 架构：
 * 为了弥补一些不足，就设计一些新的算法
 * 而为了让这些算法跑起来，所以出现了 fiber 这种数据结构
 * fiber 这种数据结构 + 新的算法 = fiber 结构
 * 
 * react 应用 从始至终 管理着最基本的三种东西
 * 1. Root（整个应用的根儿 一个对象 不是fiber 有个属性指向 current树 同样也有个属性指向 workInProgress 树）
 * 2. current树（树上的每一个节点都是 fiber，保存的是上一次的状态 并且每个fiber节点 都对应着一个 jsx 节点）
 * 3. workInProgress树（树上的每一个节点都是 fiber 保存的是本地新的状态 并且每个fiber节点都对应着一个 jsx 节点）
 * 
 * 初次渲染的时候 没有 current 树
 * react 在一开始创建 Root 的同时会创建一个 uninitialFiber 的东西（未初始化的 fiber）
 * 让 root 的 current 指向了 uninitialFiber
 * 之后再创建一个本地要用到的 workInProgress
 * 
 * react 中主要分两个阶段
 * render 阶段（指的是创建 fiber 的过程）
 * 1. 为每个节点创建新的 fiber（workInProgress）（也可能是复用）生成一颗有新状态的workInProgress树
 * 2. 初次渲染的时候（或者新创建了某个节点的时候）会将这个 fiber 创建真实的 dom 实例，并且对当前节点的子节点进行插入
 * 3. 如果不是初次渲染的话，就对比新旧的fiber状态，将产生了更新的 fiber 节点，最终通过链表的形式，挂载到 RootFiber 上
 * 
 * commit 阶段
 * 才是真正要操作页面的阶段
 * 1. 执行生命周期
 * 2. 会从 RootFiber 上获取到那条链表，根据链表上的标识来操作页面
 * 
 */