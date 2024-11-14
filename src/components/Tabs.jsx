export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOftasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTab ? " tab-selected" : "")
            }
          >
            <h4>
              {tab}
              <span> {numOftasks}</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
