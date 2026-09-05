import './App.css';

const files = [
  { name: 'Project Proposal.pdf', size: '2.4 MB', type: 'PDF', shared: true, starred: true },
  { name: 'Brand Assets.zip', size: '18.6 MB', type: 'ZIP', shared: false, starred: false },
  { name: 'UI Mockups.fig', size: '7.1 MB', type: 'FIG', shared: true, starred: true },
  { name: 'Sprint Timeline.xlsx', size: '1.2 MB', type: 'XLSX', shared: false, starred: false },
  { name: 'Launch Checklist.docx', size: '840 KB', type: 'DOCX', shared: false, starred: true },
  { name: 'Team Photos', size: '42 files', type: 'FOLDER', shared: true, starred: false },
];

const quickActions = ['Upload', 'New Folder', 'Share Link', 'Search'];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-icon">D</div>
          <div>
            <p className="brand-label">DriveFlow</p>
            <span>Cloud workspace</span>
          </div>
        </div>

        <button className="primary-btn">+ New</button>

        <nav className="nav-section">
          <p className="nav-title">Storage</p>
          <ul>
            <li className="active">My Drive</li>
            <li>Shared</li>
            <li>Recent</li>
            <li>Starred</li>
            <li>Trash</li>
          </ul>
        </nav>

        <div className="storage-card">
          <div className="storage-header">
            <span>Storage used</span>
            <strong>68%</strong>
          </div>
          <div className="progress-bar">
            <span></span>
          </div>
          <p>24.8 GB of 36 GB used</p>
        </div>
      </aside>

      <main className="content-pane">
        <header className="topbar">
          <div className="search-box">
            <span>⌕</span>
            <input type="text" placeholder="Search files and folders" />
          </div>

          <div className="profile-box">
            <div className="avatar">AS</div>
            <div>
              <strong>Aisha Shah</strong>
              <small>Owner</small>
            </div>
          </div>
        </header>

        <section className="hero-bar">
          <div>
            <p className="eyebrow">Workspace</p>
            <h1>My Drive</h1>
          </div>
          <div className="quick-actions">
            {quickActions.map((action) => (
              <button key={action}>{action}</button>
            ))}
          </div>
        </section>

        <section className="summary-grid">
          <div className="stat-card">
            <span>Total files</span>
            <strong>184</strong>
          </div>
          <div className="stat-card">
            <span>Shared with me</span>
            <strong>26</strong>
          </div>
          <div className="stat-card">
            <span>Starred</span>
            <strong>12</strong>
          </div>
        </section>

        <section className="file-table">
          <div className="table-header">
            <span>Name</span>
            <span>Size</span>
            <span>Type</span>
            <span>Access</span>
          </div>

          {files.map((file) => (
            <div className="table-row" key={file.name}>
              <div className="file-name">
                <span className="file-icon">{file.type === 'FOLDER' ? '📁' : '📄'}</span>
                <span>{file.name}</span>
              </div>
              <span>{file.size}</span>
              <span>{file.type}</span>
              <span className={`access-pill ${file.shared ? 'shared' : 'private'}`}>
                {file.shared ? 'Shared' : 'Private'}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
