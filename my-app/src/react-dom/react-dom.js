let isFirstRender = false;

// Fiber tag 属性的可选值
let HostRoot = 'HostRoot'; // 标识 RootFiber 类型
let ClassComponent = 'ClassComponent'; // 标识类组件类型
let HostComponent = 'HostComponent'; // 标识原生 DOM 类型
let HostText = 'HostText'; // 标识原生文本类型
let FunctionComponent = 'FunctionComponent'; // 标识函数组件类型

// Fiber effectTag 属性的可选值
let NoWork = 'NoWork'; // 标识没有任何工作
let Placement = 'Placement'; // 标识这个节点是新插入的
let Update = 'Update'; // 标识这个节点有更新
let Deletion = 'Deletion'; // 标识这个节点会被删除
let PlacementAndUdpate = 'PlacementAndUdpate'; // 一般是节点换位置同时有更新

class FiberNode {
  constructor(tag, key, pendingProps) {
    this.tag = tag; // 标识当前 fiber 的类型
    this.key = key;
    this.type = null; // 'div' | 'h1' | Box
    this.stateNode = null; // 标识当前 fiber 的实例
    this.children = null; // 标识当前 fiber 的子节点，每个fiber有且只有一个属性指向他的firstChild
    this.sibling = null; // 标识当前节点的兄弟节点，每个 fiber 有且只有一个属性指向隔壁的兄弟节点
    this.return = null; // 标识当前 fiber 的父节点
    this.index = 0; // 标识子节点的索引
    this.memoizedState = null; // 标识当前 fiber 的 state
    this.memoizedProps = null; // 标识当前 fiber 的 props
    this.pendingProps = pendingProps; // 标识新传入的 props
    this.effectTag = NoWork; // 标识当前节点要进行何种更新
    this.firstEffect = null; // 标识当前节点的有更新的第一个子节点
    this.lastEffect = null; // 标识当前节点的有更新的最后一个子节点
    this.nextEffect = null; // 标识下一个要更新的子节点

    this.alternate = null; // 用来连接 current 和 workInProgress 的
    this.updateQueue = null; // 一条链表，上面挂载的是当前 fiber 的新的状态
    // 其实还有很多其他属性
    // expirationTime: 0
  }
}

function createFiber(tag, key, pendingProps) {
  return new FiberNode(tag, key, pendingProps);
}

class ReactRoot {
  constructor(container) {
    this._internalRoot = this._createRoot(container);
  }

  _createRoot(container) {
    let uninitialFiber = this._createUnitialFiber(HostRoot, null, null);
    
    let root = {
      container,
      current: uninitialFiber,      // 指向 current 树
      finishedWork: null, // 指向 workInProgress 树
    };

    uninitialFiber.stateNode = root;

    return root;
  }

  _createUnitialFiber(tag, key, pendingProps) {
    return createFiber(tag, key, pendingProps);
  }
}

const ReactDOM = {
  render(reactElement, container, callback) {
    isFirstRender = true;

    let root = new ReactRoot(container);








    isFirstRender = false;
  }
};

export default ReactDOM;