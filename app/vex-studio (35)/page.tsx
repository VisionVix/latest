// @ts-nocheck
/* eslint-disable */
"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function HomePage() {
  return (
    <>
      <Script src="/page-scripts.js" strategy="afterInteractive" />
      {/* TITLEBAR */}
      <div className="titlebar">
        <div className="tb-logo">
          <div className="tb-logo-mark">V</div>
          <div>
            <span className="tb-logo-text">VEX Studio</span>
            <span className="tb-logo-sub">/ real IDE</span>
          </div>
        </div>
      
        <div className="tb-actions">
          <button className="tb-btn primary" onClick={() => { openFolder() }}>📂 Open Folder</button>
          <button className="tb-btn" onClick={() => { saveCurrentFile() }} id="saveBtn" title="Ctrl+S">💾 Save</button>
          <button className="tb-btn" onClick={() => { saveAllFiles() }} id="saveAllBtn">💾 Save All</button>
          <button className="tb-btn" onClick={() => { openSearch() }} title="Ctrl+P">🔍 Find File</button>
          <button className="tb-btn" onClick={() => { refreshTree() }} title="Refresh file tree">↺ Refresh</button>
          <button className="tb-btn" id="previewBtn" onClick={() => { togglePreview() }} title="Toggle live preview" style={{display:"none"}}>▶ Preview</button>
          <button className="tb-btn" id="githubBtn" onClick={() => { openGithubPanel() }} title="GitHub" style={{marginLeft:"8px",borderColor:"rgba(255,255,255,0.12)"}}>⎇ GitHub</button>
          <button className="tb-btn" onClick={() => { openSkillBrowser() }} title="Skill Browser" style={{borderColor:"rgba(52,211,153,0.3)",color:"#34d399"}}>📦 Skills</button>
        </div>
      
        <div className="tb-spacer"></div>
      
        <div className="tb-repo-info">
          <div className="tb-indicator" id="repoIndicator"></div>
          <span id="repoName">No folder open</span>
        </div>
      </div>
      
      {/* APP */}
      <div className="app">
      
      {/* ACTIVITY BAR */}
      <div className="activity-bar">
        <div className="activity-bar-top">
          <button className="ab-btn active" data-panel="explorer" onClick={() => { abSwitch('explorer') }} title="">
            📁<span className="ab-tooltip">Explorer</span>
          </button>
          <button className="ab-btn" data-panel="search" onClick={() => { abSwitch('search') }} title="">
            🔍<span className="ab-tooltip">Search</span>
          </button>
          <button className="ab-btn" data-panel="github" onClick={() => { abSwitch('github') }} title="">
            ⎇<span className="ab-tooltip">GitHub</span>
          </button>
          <button className="ab-btn" data-panel="project" onClick={() => { abSwitch('project') }} title="">
            ⚡<span className="ab-tooltip">Project</span>
          </button>
          <button className="ab-btn" data-panel="translation" onClick={() => { abSwitch('translation') }} title="">
            🌐<span className="ab-tooltip">Translation</span>
          </button>
        </div>
        <div className="activity-bar-bot">
          <button className="ab-btn" onClick={() => { vexToggleChat() }} title="">
            ✦<span className="ab-tooltip">VEX AI</span>
          </button>
        </div>
      </div>
      
        {/* SIDEBAR */}
        <div className="sidebar" id="sidebar">
          {/* WORKSPACE TABS */}
          <div className="ws-bar" id="wsBar">
            <div className="ws-add" onClick={() => { showNewWsMenu(event) }} title="New workspace">＋ New</div>
          </div>
      
          {/* PANEL: EXPLORER */}
          <div className="ab-panel" id="panel-explorer">
            <div className="sidebar-header">
              <div className="sidebar-title" id="sidebarTitle">Explorer</div>
              <div className="sidebar-actions">
                <button className="sidebar-icon-btn" onClick={() => { collapseAll() }} title="Collapse all">⊟</button>
              </div>
            </div>
            <div className="sidebar-file-actions">
              <button className="sfa-btn" onClick={() => { newFilePrompt() }} title="Create a new blank file">+ New File</button>
              <button className="sfa-btn" onClick={() => { addFiles() }} title="Add existing files from your computer">+ Add Files</button>
              <button className="sfa-btn" onClick={() => { newFolderPrompt() }} title="Create a new folder">+ New Folder</button>
              <button className="sfa-btn" onClick={() => { openFolder() }} title="Open a local folder" style={{flex:"1 1 100%"}}>📂 Open Folder</button>
            </div>
      
            {/* SCANNERS */}
            <div className="sidebar-scanners-hdr">🔬 Scanners <span id="projTypeLabel" style={{color:"var(--tx3)",fontWeight:400,textTransform:"none",letterSpacing:"0",fontSize:"9px"}}></span></div>
            <div className="sidebar-scanners">
              <button className="scan-btn" id="secBtn" onClick={() => { openScanner('security') }} title="Security scanner">🛡 Security<span className="scan-badge green" id="secBadge">✓</span></button>
              <button className="scan-btn" id="seoBtn" onClick={() => { openScanner('seo') }} title="SEO & Accessibility">🔍 SEO<span className="scan-badge green" id="seoBadge">✓</span></button>
              <button className="scan-btn" id="qualBtn" onClick={() => { openScanner('quality') }} title="Code quality">⚡ Quality<span className="scan-badge green" id="qualBadge">✓</span></button>
              <button className="scan-btn" id="checkBtn" onClick={() => { openChecklist() }} title="Pre-launch checklist" style={{borderLeftColor:"#a78bfa"}}>🚀 Checklist</button>
            </div>
            <div className="file-tree" id="fileTree">
              <div className="tree-empty">
                <div className="tree-empty-icon">📁</div>
                Click <strong>Open Folder</strong><br />to load your repo<br /><br />
                <span style={{fontSize:"9px",color:"var(--tx2)"}}>Select a local folder to browse.<br />Edited files download on save.</span>
              </div>
            </div>
          </div>
      
          {/* PANEL: SEARCH */}
          <div className="ab-panel" id="panel-search" style={{display:"none"}}>
            <div className="sidebar-header">
              <div className="sidebar-title">Search</div>
            </div>
            <div style={{padding:"10px"}}>
              <input className="nxc-input" id="abSearchInput" placeholder="Search across files…" oninput="abSearchFiles(this.value)" style={{marginBottom:"8px"}}/>
              <div id="abSearchResults" style={{fontSize:"11px",color:"#556677",lineHeight:1.8}}></div>
            </div>
          </div>
      
          {/* PANEL: GITHUB */}
          <div className="ab-panel" id="panel-github" style={{display:"none"}}>
            <div className="sidebar-header">
              <div className="sidebar-title">GitHub</div>
            </div>
            <div id="abGhBody" style={{flex:"1",overflowY:"auto",padding:"10px"}}></div>
          </div>
      
          {/* PANEL: PROJECT */}
          <div className="ab-panel" id="panel-project" style={{display:"none"}}>
            <div className="sidebar-header">
              <div className="sidebar-title">Project</div>
            </div>
            <div style={{padding:"10px",display:"flex",flexDirection:"column",gap:"6px"}}>
              <button className="sfa-btn" onClick={() => { openScaffoldPanel() }} style={{flex:"1 1 100%",color:"var(--gold)",borderColor:"var(--goldb)"}}>⚡ New Project / Wrap in Vite</button>
              <button className="sfa-btn" onClick={() => { openNextjsConverter() }} style={{flex:"1 1 100%",color:"#60a5fa",borderColor:"rgba(96,165,250,0.3)"}}>▲ Convert to Next.js</button>
              <button className="sfa-btn" onClick={() => { openViteConverter() }} style={{flex:"1 1 100%",color:"#a78bfa",borderColor:"rgba(167,139,250,0.3)"}}>🔋 Convert to Vite + Supabase</button>
              <button className="sfa-btn" onClick={() => { openViteToHtmlConverter() }} style={{flex:"1 1 100%",color:"#34d399",borderColor:"rgba(52,211,153,0.3)"}}>🗜 Vite → Standalone HTML</button>
              <div style={{marginTop:"8px",fontSize:"9px",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"#334455"}}>Current Workspace</div>
              <div id="abProjInfo" style={{fontSize:"11px",color:"#556677",lineHeight:1.7}}>No workspace open</div>
            </div>
          </div>
      
          {/* PANEL: TRANSLATION */}
          <div className="ab-panel" id="panel-translation" style={{display:"none"}}>
            <div className="sidebar-header">
              <div className="sidebar-title">Translation</div>
            </div>
            <div style={{padding:"10px",display:"flex",flexDirection:"column",gap:"6px"}}>
              <div style={{fontSize:"11px",color:"#556677",lineHeight:1.7,marginBottom:"4px"}}>Translate the active HTML file into multiple languages using AI.</div>
              <button className="sfa-btn" onClick={() => { openTransPanel(activeTab) }} style={{gridColumn:"span 2",color:"#4ade80",borderColor:"rgba(74,222,128,0.3)"}}>🌐 Open Translation Studio</button>
            </div>
          </div>
      
          {/* PANEL: SKILLS */}
          <div className="ab-panel" id="panel-skills" style={{display:"none"}}>
            <div className="sidebar-header">
              <div className="sidebar-title">Skills</div>
            </div>
            <div style={{padding:"10px",display:"flex",flexDirection:"column",gap:"6px"}}>
              <div style={{fontSize:"11px",color:"#556677",lineHeight:1.7,marginBottom:"4px"}}>Browse, read and edit <code style={{color:"#34d399",fontSize:"10px"}}>.skill</code> files.</div>
              <button className="sfa-btn" onClick={() => { openSkillBrowser() }} style={{gridColumn:"span 2",color:"#34d399",borderColor:"rgba(52,211,153,0.3)"}}>📦 Open Skill Browser</button>
            </div>
          </div>
      
        </div>
      
        <div className="resizer" id="sidebarResizer"></div>
      
        {/* EDITOR AREA */}
        <div className="editor-area" id="editorArea">
          <div className="tab-bar" id="tabBar"></div>
      
          <div className="editor-split" id="editorSplit">
            <div className="editor-pane" id="editorPane">
              <div id="editorPlaceholder" className="editor-placeholder">
                <div className="editor-placeholder-logo">VEX</div>
                <div className="editor-placeholder-sub">
                  Open a folder to get started<br />
                  <span className="editor-placeholder-kbd">Ctrl+P</span> Quick file search &nbsp;
                  <span className="editor-placeholder-kbd">Ctrl+S</span> Save file
                </div>
              </div>
              <div id="editor" style={{display:"none",flex:"1"}}></div>
            </div>
            <div className="split-resizer" id="splitResizer" style={{display:"none"}}></div>
            <div className="preview-pane" id="previewPane" style={{display:"none"}}>
              <div className="preview-header">
                <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                  <button id="prevModeStatic" onClick={() => { setPreviewMode('static') }} className="prev-mode-btn active" title="Static preview (HTML/CSS/JS)">⚡ Preview</button>
                  <button id="prevModeNode" onClick={() => { setPreviewMode('node') }} className="prev-mode-btn" title="Run with WebContainers (requires Vercel deploy)">▶ Run</button>
                </div>
                <span id="previewFileName" style={{fontWeight:400,color:"var(--tx2)",fontSize:"11px",marginLeft:"4px"}}></span>
                <button onClick={() => { refreshActivePreview() }} style={{marginLeft:"auto",background:"none",border:"none",color:"var(--tx2)",cursor:"pointer",fontSize:"11px",padding:"2px 6px"}} title="Force refresh">↺</button>
                <div className="preview-refresh-dot" id="previewDot"></div>
              </div>
              <iframe id="previewFrame" className="preview-iframe" sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"></iframe>
              <div id="sbFrame" className="preview-iframe" style={{display:"none",flex:"1",border:"none"}}></div>
            </div>
          </div>
      
          {/* TERMINAL */}
          <div className="terminal-panel" id="terminalPanel">
            <div className="tp-header">
              <div className="tp-tab active">⌨ Terminal</div>
              <div className="tp-tab" onClick={() => { toast('Output panel coming soon') }}>⊞ Output</div>
              <div className="tp-spacer"></div>
              <button className="tp-action" onClick={() => { copyTermOutput() }}>📋 Copy</button>
              <button className="tp-action" onClick={() => { clearTerm() }}>✕ Clear</button>
              <button className="tp-close" onClick={() => { toggleTerminal() }}>▼</button>
            </div>
            <div className="terminal-body" id="termBody">
              <div className="t-line"><span className="t-prompt">studio:~$</span><span className="t-cmd">VEX Studio ready</span></div>
              <div className="t-info">ℹ Built-in: open · close · rm -rf . · ls · clear · help</div>
              <div className="t-info">ℹ Run commands in your system terminal (PowerShell / Terminal).</div>
            </div>
            <div className="terminal-input-row">
              <span className="t-prompt">studio:~$</span>
              <input className="terminal-input" id="termInput" placeholder="Type a note or command hint..." onKeyDown={(e) => { handleTermKey(event) }} />
            </div>
          </div>
        </div>
      
      
      
      </div>
      
      {/* VEX ROBOT ASSISTANT */}
      <div className="vex-container" id="vexC">
        <div className="vex-chat" id="vexChat">
          <div className="vex-chat-hdr">
            <span style={{width:"6px",height:"6px",background:"#22c55e",borderRadius:"50%",boxShadow:"0 0 5px rgba(34,197,94,.6)",flexShrink:0}}></span>
            <h3>VEX Assistant</h3>
            <div className="vex-ctx-tag" id="vexCtxTag" onClick={() => { vexPasteFile() }} title="Click to paste open file">📄 <span id="vexCtxFile">no file</span></div>
            <button style={{background:"none",border:"none",color:"#60a5fa",fontSize:"11px",fontWeight:700,cursor:"pointer",padding:"2px 6px",borderRadius:"4px",border:"1px solid rgba(96,165,250,.3)"}} onClick={() => { openWsChat() }} title="Workspace chat — Claude reads your files">⚡ Workspace</button>
            <button id="vexScratchBtn" style={{background:"none",border:"none",color:"#a78bfa",fontSize:"11px",fontWeight:700,cursor:"pointer",padding:"2px 6px",borderRadius:"4px",border:"1px solid rgba(167,139,250,.3)",display:"none"}} onClick={() => { openScratchChat() }} title="Build a new HTML app from scratch">✦ Build</button>
            <button id="vexRegexBtn" style={{background:"none",border:"none",color:"#34d399",fontSize:"11px",fontWeight:700,cursor:"pointer",padding:"2px 6px",borderRadius:"4px",border:"1px solid rgba(52,211,153,.3)",display:"none"}} onClick={() => { vexScanRegex() }} title="Find & highlight all regex in active file">🔍 Regex</button>
            <button style={{background:"none",border:"none",color:"#8899aa",fontSize:"16px",cursor:"pointer",padding:"0 2px",marginLeft:"4px"}} onClick={() => { vexToggleChat() }}>✕</button>
          </div>
          <div className="vex-chat-body" id="vexBody"></div>
          <div className="vex-chat-input">
            <div className="vex-input-row">
              <input type="text" className="vex-main-input" id="vexInput" placeholder="Ask VEX about your code..." onKeyDown={(e) => { if(event.key==='Enter')vexSend() }} />
              <button className="vex-send-btn" onClick={() => { vexSend() }}>Send</button>
            </div>
            <input type="password" className="vex-key-input" id="vexKey" placeholder="Anthropic API key  sk-ant-..." oninput="vexSaveKey(this.value)" />
          </div>
        </div>
        <div className="vex-bubble" id="vexBubble"></div>
        <div className="vex-glow" id="vexGlow"></div>
        <div className="vex-spark"></div><div className="vex-spark"></div><div className="vex-spark"></div><div className="vex-spark"></div>
        <div className="vex-robot" id="vexBot">
          <div className="vex-notif-dot" id="vexNotifDot"></div>
          <div className="vex-v">
            <div className="vex-sl"></div><div className="vex-sr"></div>
            <div className="vex-vl"></div><div className="vex-vr"></div>
          </div>
          <div className="vex-face">
            <div className="vex-harc"></div>
            <div className="vex-eyes"><div className="vex-eye l"></div><div className="vex-eye r"></div></div>
            <div className="vex-mouth"></div>
          </div>
          <div className="vex-arm l"><div className="vex-pin"></div></div>
          <div className="vex-arm r"><div className="vex-pin"></div></div>
        </div>
        <div className="vex-shadow"></div>
        <div className="vex-hint">✦ Ask VEX</div>
      </div>
      {/* STATUSBAR */}
      <div className="statusbar">
        <div className="sb-item gold" id="sbBranch">⎇ —</div>
        <div className="sb-item" id="sbModified">0 modified</div>
        <div className="sb-item" id="sbFile">📄 —</div>
        <div className="sb-spacer"></div>
        <div className="sb-item gold" onClick={() => { openChecklist() }} title="Pre-launch checklist" style={{background:"rgba(139,53,200,.12)",borderRadius:"4px",padding:"0 8px",fontWeight:700}}>🚀 Checklist</div>
        <div className="sb-item blue" onClick={() => { toggleAI() }}>✦ Assistant</div>
        <div className="sb-item" onClick={() => { toggleTerminal() }}>⌨ Terminal</div>
        <div className="sb-item" id="sbLang">—</div>
        <div className="sb-item" id="sbPos">Ln 1, Col 1</div>
      </div>
      
      {/* SEARCH OVERLAY */}
      <div className="search-overlay" id="searchOverlay" onClick={() => { e => { if(e.target===this) closeSearch(); } }}>
        <div className="search-box" onClick={() => { e => e.stopPropagation() }}>
          <div className="search-input-row">
            <span style={{color:"var(--tx3)",fontSize:"12px"}}>🔍</span>
            <input className="search-input" id="searchInput" placeholder="Search files..."
              oninput="filterSearch(this.value)"
              onKeyDown={(e) => { handleSearchKey(event) }} />
          </div>
          <div className="search-results" id="searchResults"></div>
        </div>
      </div>
      
      {/* TOAST */}
      <div className="toast-container" id="toastContainer"></div>
      
      {/* Hidden folder picker (works in iframes, unlike showDirectoryPicker) */}
      <input type="file" id="folderInput" webkitdirectory multiple style={{display:"none"}} onChange={(e) => { handleFolderInput(this) }} />
      <input type="file" id="fileInput" multiple style={{display:"none"}} onChange={(e) => { handleFileInput(this) }} />
      
      {/* MONACO */}
      
      
      
      
      <script>
      'use strict';
      
      // ══════════════════════════════
      //  STATE
      // ══════════════════════════════
      
      // ── Workspace system ──
      // Each workspace holds all per-folder state
      let workspaces = [];     // array of workspace objects
      let activeWsId = null;   // id of the active workspace
      
      function createWorkspace(name) {
        return {
          id: Date.now() + Math.random(),
          name,
          fileHandles: {},
          dirHandles: {},
          fileContents: {},
          modifiedFiles: new Set(),
          openTabs: [],
          activeTab: null,
          editorModels: {},
          collapsedDirs: new Set(),
          allFilePaths: [],
        };
      }
      
      // Shorthand getters — always read from active workspace
      function ws()           { return workspaces.find(w => w.id === activeWsId) || null; }
      function get(key)       { const w = ws(); return w ? w[key] : (key === 'modifiedFiles' || key === 'collapsedDirs' ? new Set() : key.endsWith('s') || key === 'openTabs' || key === 'allFilePaths' ? [] : {}); }
      
      // Per-workspace state accessors
      Object.defineProperties(window, {
        fileHandles:   { get: () => ws()?.fileHandles   ?? {}, set: v => { if(ws()) ws().fileHandles   = v; } },
        dirHandles:    { get: () => ws()?.dirHandles    ?? {}, set: v => { if(ws()) ws().dirHandles    = v; } },
        fileContents:  { get: () => ws()?.fileContents  ?? {}, set: v => { if(ws()) ws().fileContents  = v; } },
        modifiedFiles: { get: () => ws()?.modifiedFiles ?? new Set(), set: v => { if(ws()) ws().modifiedFiles = v; } },
        openTabs:      { get: () => ws()?.openTabs      ?? [], set: v => { if(ws()) ws().openTabs      = v; } },
        activeTab:     { get: () => ws()?.activeTab     ?? null, set: v => { if(ws()) ws().activeTab   = v; } },
        editorModels:  { get: () => ws()?.editorModels  ?? {}, set: v => { if(ws()) ws().editorModels  = v; } },
        collapsedDirs: { get: () => ws()?.collapsedDirs ?? new Set(), set: v => { if(ws()) ws().collapsedDirs = v; } },
        allFilePaths:  { get: () => ws()?.allFilePaths  ?? [], set: v => { if(ws()) ws().allFilePaths  = v; } },
      });
      
      let rootHandle = null;
      let editor = null;
      let vexHistory = [];
      let vexTyping = false;
      let vexChatOpen = false;
      let termOpen = true;
      
      // ══════════════════════════════
      //  MONACO INIT
      // ══════════════════════════════
      require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
      
      require(['vs/editor/editor.main'], function() {
        monaco.editor.defineTheme('vex-dark', {
          base: 'vs-dark',
          inherit: true,
          rules: [
            { token: 'comment', foreground: '55556a', fontStyle: 'italic' },
            { token: 'keyword', foreground: 'a78bfa' },
            { token: 'string', foreground: '4ade80' },
            { token: 'number', foreground: '8B35C8' },
            { token: 'type', foreground: '60a5fa' },
          ],
          colors: {
            'editor.background': '#0a0a0f',
            'editor.foreground': '#e8e8f0',
            'editorLineNumber.foreground': '#2a2a3a',
            'editorLineNumber.activeForeground': '#55556a',
            'editor.selectionBackground': '#8B35C820',
            'editor.lineHighlightBackground': '#0f0f16',
            'editorCursor.foreground': '#8B35C8',
            'editor.findMatchBackground': '#8B35C830',
            'editorBracketMatch.background': '#8B35C820',
            'editorBracketMatch.border': '#8B35C8',
          }
        });
      
        editor = monaco.editor.create(document.getElementById('editor'), {
          theme: 'vex-dark',
          language: 'typescript',
          fontSize: 12,
          fontFamily: "'JetBrains Mono', monospace",
          fontLigatures: true,
          lineHeight: 20,
          minimap: { enabled: true, scale: 1 },
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          renderWhitespace: 'selection',
          bracketPairColorization: { enabled: true },
          padding: { top: 10 },
          automaticLayout: true,
        });
      
        editor.onDidChangeCursorPosition(e => {
          document.getElementById('sbPos').textContent =
            `Ln ${e.position.lineNumber}, Col ${e.position.column}`;
        });
      
        editor.onDidChangeModelContent(() => {
          if (activeTab) {
            const m = editor.getModel();
            if (m) fileContents[activeTab] = m.getValue();
            // Auto-refresh preview if open
            if (previewOpen && activeTab && activeTab.endsWith('.html')) schedulePreviewRefresh();
            modifiedFiles.add(activeTab);
            updateTabModified(activeTab);
            updateModifiedCount();
          }
        });
      
        // Ctrl+S to save
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => saveCurrentFile());
      
        termLog('success', '✓ Monaco editor initialized');
      });
      
      // ══════════════════════════════
      //  FOLDER / FILE SYSTEM
      // ══════════════════════════════
      function showNewWsMenu(e) {
        document.querySelectorAll('.ctx-menu').forEach(function(m){ m.remove(); });
        var btn = e.currentTarget;
        var rect = btn.getBoundingClientRect();
        var menu = document.createElement('div');
        menu.className = 'ctx-menu';
        menu.style.cssText = 'position:fixed;z-index:99999;background:#0f1923;border:1px solid #1e3044;border-radius:8px;padding:4px 0;font-family:"IBM Plex Sans",sans-serif;font-size:12px;min-width:190px;box-shadow:0 8px 24px rgba(0,0,0,.6)';
        menu.style.left = rect.left + 'px';
        menu.style.top = (rect.bottom + 4) + 'px';
        var items = [
          { icon: '📂', label: 'Open Folder', sub: 'Load a local folder', a: function(){ openFolder(); } },
          { icon: '✦',  label: 'New Empty Workspace', sub: 'Start from scratch', a: function(){ createEmptyWorkspace(); } },
        ];
        items.forEach(function(item) {
          var el = document.createElement('div');
          el.style.cssText = 'padding:8px 14px;cursor:pointer;color:#c8c8e0;display:flex;align-items:center;gap:10px;';
          el.innerHTML = '<span style={{fontSize:"15px"}}>' + item.icon + '</span>'
            + '<div><div style={{fontWeight:600}}>' + item.label + '</div>'
            + '<div style={{fontSize:"10px",color:"#556677",marginTop:"1px"}}>' + item.sub + '</div></div>';
          el.onmouseenter = function(){ el.style.background='#15202b'; el.style.color='#d4a853'; };
          el.onmouseleave = function(){ el.style.background=''; el.style.color='#c8c8e0'; };
          el.onclick = function(){ menu.remove(); item.a(); };
          menu.appendChild(el);
        });
        document.body.appendChild(menu);
        setTimeout(function(){ document.addEventListener('click', function(){ menu.remove(); }, {once:true}); }, 50);
      }
      
      function createEmptyWorkspace() {
        setTimeout(function(){
          var name = prompt('Workspace name:', 'New Project');
          if (!name || !name.trim()) return;
          var newWs = createWorkspace(name.trim());
          workspaces.push(newWs);
          activeWsId = newWs.id;
          syncWorkspaceUI();
          renderTree();
          renderWsTabs();
          toast('\u2756 Created: ' + name.trim(), 'success');
        }, 50);
      }
      
      function openFolder() {
        const input = document.getElementById('folderInput');
        input.value = '';
        input.click();
      }
      
      async function handleFolderInput(input) {
        const files = Array.from(input.files);
        if (!files.length) return;
      
        const folderName = files[0].webkitRelativePath.split('/')[0] || 'project';
      
        // Create a new workspace for this folder
        const newWs = createWorkspace(folderName);
        workspaces.push(newWs);
        activeWsId = newWs.id;
      
        termLog('info', `📂 Loading: ${folderName}`);
      
        const SKIP = new Set(['node_modules', '.git', 'dist', 'build', '.next', 'coverage', '__pycache__', '.cache']);
      
        for (const file of files) {
          const parts = file.webkitRelativePath.split('/');
          if (parts.some(p => SKIP.has(p))) continue;
          const relPath = parts.slice(1).join('/');
          if (!relPath) continue;
          newWs.fileHandles[relPath] = file;
          newWs.allFilePaths.push(relPath);
          for (let i = 1; i < parts.length - 1; i++) {
            const dirPath = parts.slice(1, i + 1).join('/');
            if (!newWs.dirHandles[dirPath]) newWs.dirHandles[dirPath] = true;
          }
        }
      
        syncWorkspaceUI();
        renderTree();
        renderWsTabs();
        termLog('success', `✓ Loaded ${newWs.allFilePaths.length} files`);
        toast(`✓ Opened ${folderName} — ${newWs.allFilePaths.length} files`, 'success');
        _wsScanned = false;
        setTimeout(() => _runWorkspaceScan(), 500);
      }
      
      function addFiles() {
        if (!ws()) { toast('Open a workspace first', 'error'); return; }
        var input = document.getElementById('fileInput');
        input.value = '';
        input.click();
      }
      
      async function handleFileInput(input) {
        var files = Array.from(input.files);
        if (!files.length) return;
        var added = 0;
        for (var file of files) {
          var path = file.name;
          ws().fileHandles[path] = file;
          if (!ws().allFilePaths.includes(path)) ws().allFilePaths.push(path);
          try { ws().fileContents[path] = await file.text(); } catch(e) {}
          added++;
        }
        renderTree();
        toast('✓ Added ' + added + ' file' + (added > 1 ? 's' : ''), 'success');
        if (files.length === 1) openFile(files[0].name);
        // Detect translation JSON — 2-char lang code like hi.json, es.json
        var jsonFiles = Array.from(files).filter(function(f){
          return /^[a-z]{2}\.json$/.test(f.name) && f.name !== 'en.json';
        });
        if (jsonFiles.length > 0) {
          var jf = jsonFiles[0];
          var langCode = jf.name.replace('.json','');
          var content = ws().fileContents[jf.name];
          try {
            var parsed = JSON.parse(content);
            if (Object.keys(parsed).length > 3) {
              if (!vexChatOpen) vexToggleChat();
              setTimeout(function(){
                vexAddMsg('I see <b>' + jf.name + '</b> — a <b>' + langCode.toUpperCase() + '</b> translation with ' + Object.keys(parsed).length + ' strings.<br /><br />Which HTML file should I inject it into?');
                var htmlFiles = allFilePaths.filter(function(p){ return p.endsWith('.html'); });
                if (htmlFiles.length > 0) {
                  vexAddBtns(htmlFiles.slice(0,4).map(function(p){
                    var captured = p;
                    return {label: captured.split('/').pop(), action: function(){ injectTranslationFromJSON(captured, langCode, parsed); }};
                  }));
                } else {
                  vexAddMsg('No HTML files in workspace. Open your game file first.');
                }
              }, 500);
            }
          } catch(e) {}
        }
      }
      
      function newFolderPrompt() {
        if (!ws()) { toast('Open a workspace first', 'error'); return; }
        var name = prompt('New folder name:', 'my-folder');
        if (!name || !name.trim()) return;
        var folderPath = name.trim().replace(/\/+$/, '');
        // Create a .gitkeep placeholder so the folder appears in the tree
        var keepPath = folderPath + '/.gitkeep';
        if (ws().allFilePaths.includes(keepPath)) { toast('Folder already exists', 'error'); return; }
        ws().fileContents[keepPath] = '';
        ws().allFilePaths.push(keepPath);
        renderTree();
        toast('✓ Created folder: ' + folderPath, 'success');
      }
      
      function newFilePrompt(folder) {
        if (!ws()) { toast('Open a workspace first', 'error'); return; }
        var defaultName = folder ? folder + '/untitled.ts' : 'untitled.ts';
        var hint = folder ? 'New file in ' + folder + ':' : 'New file name:';
        var name = prompt(hint, defaultName);
        if (!name || !name.trim()) return;
        var path = name.trim();
        if (ws().allFilePaths.includes(path)) { toast('File already exists', 'error'); return; }
        ws().fileContents[path] = '';
        ws().allFilePaths.push(path);
        ws().modifiedFiles.add(path);
        renderTree();
        openFile(path);
        toast('✓ Created ' + path, 'success');
      }
      
      function switchWorkspace(id) {
        if (activeWsId === id) return;
      
        // Save editor content back to current workspace before switching
        const cur = ws();
        if (cur && cur.activeTab && editor) {
          const model = cur.editorModels[cur.activeTab];
          if (model) cur.fileContents[cur.activeTab] = model.getValue();
        }
      
        // Save current workspace chat before switching
        const oldId = activeWsId;
      
        activeWsId = id;
        syncWorkspaceUI();
      
        // Restore editor for new workspace
        const next = ws();
        if (next && next.activeTab && next.editorModels[next.activeTab]) {
          document.getElementById('editorPlaceholder').style.display = 'none';
          document.getElementById('editor').style.display = 'block';
          editor.setModel(next.editorModels[next.activeTab]);
        } else {
          document.getElementById('editorPlaceholder').style.display = 'flex';
          document.getElementById('editor').style.display = 'none';
        }
      
        renderWsTabs();
        renderTree();
        renderTabs();
        _wsScanned = false;
        setTimeout(() => _runWorkspaceScan(), 300);
      
        // Switch chat to new workspace
        _wsOnWorkspaceSwitch(oldId, id);
      
        // Show workspace name in chat if open
        const overlay = document.getElementById('vexWsOverlay');
        if (overlay?.classList.contains('open') && next) {
          const badge = document.createElement('div');
          badge.style.cssText = 'font-size:9px;color:#334455;padding:4px 0;text-align:center;border-top:1px solid #1e3044;margin-top:4px';
          badge.textContent = `── switched to ${next.name} ──`;
          document.getElementById('vexWsBody')?.appendChild(badge);
        }
      }
      
      function closeWorkspace(id, e) {
        e && e.stopPropagation();
        const idx = workspaces.findIndex(w => w.id === id);
        if (idx === -1) return;
        const name = workspaces[idx].name;
        const hasModified = workspaces[idx].modifiedFiles && workspaces[idx].modifiedFiles.size > 0;
      
        // Ask VEX to confirm
        if (!vexChatOpen) vexToggleChat();
        vexAddMsg('⚠️ <b>Close workspace "' + name + '"?</b><br /><br />'
          + (hasModified
            ? '🔴 You have <b>unsaved changes</b> — closing will lose them permanently.<br /><br />'
            : 'Any work not pushed to GitHub will be lost.<br /><br />')
          + 'Are you sure?');
        vexAddBtns([
          { label: '✅ Yes, close it', action: function() {
            Object.values(workspaces[idx].editorModels).forEach(m => m.dispose && m.dispose());
            workspaces.splice(idx, 1);
            if (workspaces.length === 0) {
              activeWsId = null;
              resetUI();
            } else {
              const next = workspaces[Math.min(idx, workspaces.length - 1)];
              activeWsId = next.id;
              switchWorkspace(activeWsId);
            }
            renderWsTabs();
            termLog('info', `📁 Closed workspace: ${name}`);
            toast(`Closed ${name}`);
          }},
          { label: '✕ Cancel', action: function() {} }
        ]);
      }
      
      function syncWorkspaceUI() {
        const w = ws();
        if (!w) { resetUI(); return; }
        document.getElementById('repoName').textContent = w.name;
        document.getElementById('repoIndicator').classList.toggle('live', w.allFilePaths.length > 0);
        document.getElementById('sbBranch').textContent = `⎇ ${w.name}`;
        document.getElementById('sidebarTitle').textContent = w.name;
        const af = w.activeTab;
        if (af) {
          document.getElementById('sbFile').textContent = `📄 ${af.split('/').pop()}`;
          document.getElementById('sbLang').textContent = getLang(af).toUpperCase();
          document.getElementById('vexCtxFile').textContent = af.split('/').pop();
        } else {
          document.getElementById('sbFile').textContent = '📄 —';
          document.getElementById('sbLang').textContent = '—';
          document.getElementById('vexCtxFile').textContent = 'no file open';
        }
        updateModifiedCount();
        abRefreshPanels();
      }
      
      function resetUI() {
        document.getElementById('repoName').textContent = 'No folder open';
        document.getElementById('repoIndicator').classList.remove('live');
        document.getElementById('sbBranch').textContent = '⎇ —';
        document.getElementById('sbFile').textContent = '📄 —';
        document.getElementById('sbLang').textContent = '—';
        document.getElementById('sbModified').textContent = '0 modified';
        document.getElementById('sidebarTitle').textContent = 'Explorer';
        document.getElementById('vexCtxFile').textContent = 'no file open';
        document.getElementById('tabBar').innerHTML = '';
        document.getElementById('editorPlaceholder').style.display = 'flex';
        document.getElementById('editor').style.display = 'none';
        document.getElementById('fileTree').innerHTML = `
          <div className="tree-empty">
            <div className="tree-empty-icon">📁</div>
            Click <strong>＋</strong> or <strong>Open Folder</strong><br />to load a repo<br /><br />
            <span style={{fontSize:"9px",color:"var(--tx2)"}}>Multiple repos supported via workspace tabs.</span>
          </div>`;
      }
      
      function renderWsTabs() {
        const bar = document.getElementById('wsBar');
        bar.innerHTML = '';
      
        // Render all tabs
        for (const w of workspaces) {
          const tab = document.createElement('div');
          tab.className = `ws-tab ${w.id === activeWsId ? 'active' : ''}`;
          tab.dataset.wsId = w.id;
          tab.innerHTML = `
            <div className="ws-tab-dot"></div>
            <span>${w.name}</span>
            <span className="ws-tab-close" onClick={() => { closeWorkspace(${w.id},event) }}>✕</span>`;
          tab.onclick = () => switchWorkspace(w.id);
          bar.appendChild(tab);
        }
      
        // ＋ New button — always visible, flex-shrink:0
        const addBtn = document.createElement('div');
        addBtn.className = 'ws-add';
        addBtn.title = 'New workspace';
        addBtn.textContent = '＋';
        addBtn.style.cssText = 'flex-shrink:0;padding:0 8px;font-size:14px';
        addBtn.onclick = function(e){ showNewWsMenu(e); };
        bar.appendChild(addBtn);
      
        // Overflow › button — shown when tabs overflow
        const overflowBtn = document.createElement('div');
        overflowBtn.className = 'ws-overflow-btn';
        overflowBtn.id = 'wsOverflowBtn';
        overflowBtn.title = 'All workspaces';
        overflowBtn.textContent = '›';
        overflowBtn.style.display = 'none';
        overflowBtn.onclick = function(e) { e.stopPropagation(); showWsOverflowMenu(overflowBtn); };
        bar.appendChild(overflowBtn);
      
        // Check overflow after render
        requestAnimationFrame(checkWsOverflow);
      }
      
      function checkWsOverflow() {
        const bar = document.getElementById('wsBar');
        const overflowBtn = document.getElementById('wsOverflowBtn');
        if (!bar || !overflowBtn) return;
      
        // Collect all tabs
        const tabs = Array.from(bar.querySelectorAll('.ws-tab'));
        if (!tabs.length) { overflowBtn.style.display = 'none'; return; }
      
        // Available width = bar width minus ＋ button (~32px) minus overflow btn (~24px)
        const barW = bar.clientWidth - 56;
        const tabW = Math.floor(barW / tabs.length);
        const minTab = 40;
      
        if (tabW < minTab) {
          // Show overflow: only show tabs that fit, rest go into dropdown
          const visibleCount = Math.max(1, Math.floor(barW / minTab) - 1);
          // Always keep active tab visible
          const activeIdx = tabs.findIndex(t => t.dataset.wsId === String(activeWsId));
          let visibleIds = new Set();
      
          // Start with active
          if (activeIdx >= 0) visibleIds.add(activeIdx);
          // Fill remaining slots from start
          for (let i = 0; i < tabs.length && visibleIds.size < visibleCount; i++) {
            visibleIds.add(i);
          }
      
          tabs.forEach(function(t, i) {
            t.style.display = visibleIds.has(i) ? 'flex' : 'none';
            t.style.flex = '1 1 0';
            t.style.maxWidth = '120px';
          });
          overflowBtn.style.display = 'flex';
          // Show count of hidden
          const hidden = tabs.length - visibleIds.size;
          overflowBtn.textContent = '› ' + (hidden > 0 ? '+' + hidden : '');
        } else {
          // All fit — show all, hide overflow
          tabs.forEach(function(t) {
            t.style.display = 'flex';
            t.style.flex = '1 1 0';
            t.style.maxWidth = '140px';
          });
          overflowBtn.style.display = 'none';
        }
      }
      
      function showWsOverflowMenu(btn) {
        document.querySelectorAll('.ctx-menu').forEach(function(m){ m.remove(); });
        var rect = btn.getBoundingClientRect();
        var menu = document.createElement('div');
        menu.className = 'ctx-menu';
        menu.style.cssText = 'position:fixed;z-index:99999;background:#0f1923;border:1px solid #1e3044;border-radius:8px;padding:4px 0;font-family:"IBM Plex Sans",sans-serif;font-size:11px;min-width:200px;box-shadow:0 8px 24px rgba(0,0,0,.6)';
        menu.style.left = Math.max(0, rect.right - 200) + 'px';
        menu.style.top = (rect.bottom + 4) + 'px';
      
        var label = document.createElement('div');
        label.style.cssText = 'padding:6px 14px 4px;font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#334455';
        label.textContent = 'All Workspaces';
        menu.appendChild(label);
      
        workspaces.forEach(function(w) {
          var item = document.createElement('div');
          var isActive = w.id === activeWsId;
          item.style.cssText = 'padding:7px 14px;cursor:pointer;color:' + (isActive ? '#d4a853' : '#c8c8e0') + ';display:flex;align-items:center;gap:8px;';
          item.innerHTML = '<div style={{width:"6px",height:"6px",borderRadius:"50%",background:"' + (isActive ? 'var(--gold)' : '#334455') + '",flexShrink:0}}></div>'
            + '<span style={{flex:"1",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>' + w.name + '</span>'
            + '<span style={{fontSize:"9px",color:"#334455"}}>' + w.allFilePaths.length + ' files</span>';
          item.onmouseenter = function(){ item.style.background='#15202b'; };
          item.onmouseleave = function(){ item.style.background=''; };
          item.onclick = function(){ menu.remove(); switchWorkspace(w.id); };
          menu.appendChild(item);
        });
      
        document.body.appendChild(menu);
        setTimeout(function(){ document.addEventListener('click', function(){ menu.remove(); }, {once:true}); }, 50);
      }
      
      async function refreshTree() {
        if (!ws() || !ws().allFilePaths.length) { toast('No folder open'); return; }
        renderTree();
        toast('↺ Tree refreshed');
      }
      
      // ══════════════════════════════
      //  TREE RENDERING
      // ══════════════════════════════
      function renderTree() {
        const container = document.getElementById('fileTree');
        if (allFilePaths.length === 0) {
          container.innerHTML = '<div className="tree-empty"><div className="tree-empty-icon">📭</div>No files found</div>';
          return;
        }
      
        // Build tree structure
        const tree = {};
        for (const path of allFilePaths) {
          const parts = path.split('/');
          let node = tree;
          for (let i = 0; i < parts.length - 1; i++) {
            const dir = parts[i];
            if (!node[dir]) node[dir] = { __files: [], __dirs: {} };
            node = node[dir].__dirs || (node[dir].__dirs = {});
          }
          const fileName = parts[parts.length - 1];
          const parentKey = parts.slice(0, -1).join('/');
          if (!tree.__root) tree.__root = [];
          // Just collect flat paths, render them sorted
        }
      
        container.innerHTML = '';
        const sorted = [...allFilePaths].sort();
        renderFlatTree(container, sorted);
      }
      
      function renderFlatTree(container, paths) {
        // renderDirGroup handles both root files and subdirectories — no separate loop needed
        renderDirGroup(container, paths, '', 0);
      }
      
      function renderDirGroup(container, paths, prefix, depth) {
        const dirs = new Set();
        const files = [];
      
        for (const path of paths) {
          const rel = prefix ? path.slice(prefix.length + 1) : path;
          const parts = rel.split('/');
          if (parts.length === 1) {
            files.push(path);
          } else {
            const dir = prefix ? `${prefix}/${parts[0]}` : parts[0];
            dirs.add(dir);
          }
        }
      
        // Dirs first
        for (const dir of [...dirs].sort()) {
          const name = dir.split('/').pop();
          const isCollapsed = collapsedDirs.has(dir);
          const dirEl = document.createElement('div');
          dirEl.className = 'tree-item dir';
          dirEl.style.paddingLeft = `${14 + depth * 14}px`;
          dirEl.dataset.dir = dir;
          dirEl.innerHTML = `
            <span className="tree-dir-toggle ${isCollapsed ? '' : 'open'}">▶</span>
            <span className="tree-icon">📁</span>
            <span>${name}</span>
          `;
          dirEl.onclick = () => toggleDir(dir);
          dirEl.oncontextmenu = (e) => { e.preventDefault(); showDirContextMenu(e.clientX, e.clientY, dir); };
          container.appendChild(dirEl);
      
          if (!isCollapsed) {
            const children = paths.filter(p => p.startsWith(dir + '/'));
            renderDirGroup(container, children, dir, depth + 1);
          }
        }
      
        // Then files
        for (const file of files.sort()) {
          container.appendChild(makeFileItem(file, file.split('/').pop(), depth));
        }
      }
      
      function makeFileItem(path, name, depth) {
        const el = document.createElement('div');
        el.className = `tree-item ${modifiedFiles.has(path) ? 'modified' : ''} ${activeTab === path ? 'active' : ''}`;
        el.style.paddingLeft = `${14 + depth * 14}px`;
        el.dataset.path = path;
        el.innerHTML = `<span className="tree-icon">${fileIcon(name)}</span><span className="tree-name">${name}</span>`;
        el.onclick = () => openFile(path);
        el.oncontextmenu = (e) => { e.preventDefault(); showFileContextMenu(e.clientX, e.clientY, path, name); };
        return el;
      }
      
      function toggleDir(dir) {
        if (collapsedDirs.has(dir)) collapsedDirs.delete(dir);
        else collapsedDirs.add(dir);
        renderTree();
      }
      
      function collapseAll() {
        const dirs = Object.keys(dirHandles);
        dirs.forEach(d => collapsedDirs.add(d));
        renderTree();
      }
      
      function fileIcon(name) {
        if (name.endsWith('.ts') || name.endsWith('.tsx')) return '🔷';
        if (name.endsWith('.js') || name.endsWith('.jsx')) return '🟨';
        if (name.endsWith('.json')) return '📋';
        if (name.endsWith('.md')) return '📝';
        if (name.endsWith('.html')) return '🌐';
        if (name.endsWith('.css')) return '🎨';
        if (name.endsWith('.env') || name.startsWith('.')) return '⚙';
        if (name.endsWith('.sh')) return '⚡';
        if (name.endsWith('.yml') || name.endsWith('.yaml')) return '🔧';
        return '📄';
      }
      
      // ══════════════════════════════
      //  FILE OPEN / EDIT / SAVE
      // ══════════════════════════════
      async function openFile(path) {
        const fileObj = fileHandles[path];
      
        // Load content if not cached — skip if content already exists (default project)
        if (fileContents[path] === undefined) {
          if (!fileObj) return; // no handle and no content, can't open
          try {
            fileContents[path] = await fileObj.text();
          } catch (err) {
            toast(`Cannot read file: ${err.message}`, 'error');
            return;
          }
        }
      
        // Add tab if not open
        if (!openTabs.find(t => t.path === path)) {
          openTabs.push({ path, name: path.split('/').pop() });
          renderTabs();
        }
      
        setActiveTab(path);
      
        // Passive VEX warning for large/compiled files
        const content = fileContents[path] || '';
        if (content) setTimeout(() => _fgWarnVex(path, content), 600);
      }
      
      function setActiveTab(path) {
        activeTab = path;
      
        // Show editor
        document.getElementById('editorPlaceholder').style.display = 'none';
        document.getElementById('editor').style.display = 'block';
      
        // Get or create model
        if (!editorModels[path]) {
          const lang = getLang(path);
          editorModels[path] = monaco.editor.createModel(fileContents[path] || '', lang);
        }
      
        editor.setModel(editorModels[path]);
      
        // Update UI
        renderTabs();
        updateTreeActive(path);
        const name = path.split('/').pop();
        document.getElementById('sbFile').textContent = `📄 ${name}`;
        document.getElementById('sbLang').textContent = getLang(path).toUpperCase();
      
        // Update scratch button visibility
        setTimeout(_updateScratchBtn, 50);
        setTimeout(_vexUpdateRegexBtn, 50);
        // Show preview button only for HTML files
        var prevBtn = document.getElementById('previewBtn');
        if (prevBtn) prevBtn.style.display = path.endsWith('.html') ? 'inline-flex' : 'none';
        // Close preview if switching to non-HTML
        if (!path.endsWith('.html') && previewOpen) togglePreview();
        // Update VEX context
        const ctxEl = document.getElementById('vexCtxFile');
        if (ctxEl) ctxEl.textContent = name;
        // Trigger VEX bubble
        triggerAIFileOpen(name);
      }
      
      function getLang(path) {
        if (path.endsWith('.ts') || path.endsWith('.tsx')) return 'typescript';
        if (path.endsWith('.js') || path.endsWith('.jsx')) return 'javascript';
        if (path.endsWith('.json')) return 'json';
        if (path.endsWith('.html')) return 'html';
        if (path.endsWith('.css')) return 'css';
        if (path.endsWith('.md')) return 'markdown';
        if (path.endsWith('.yml') || path.endsWith('.yaml')) return 'yaml';
        if (path.endsWith('.sh')) return 'shell';
        return 'plaintext';
      }
      
      async function saveCurrentFile() {
        if (!activeTab) return;
        await saveFile(activeTab);
      }
      
      async function saveAllFiles() {
        for (const path of modifiedFiles) {
          await saveFile(path);
        }
        toast(`✓ All files saved`, 'success');
      }
      
      async function saveFile(path) {
        try {
          // Get current content from model
          let content;
          if (path === activeTab && editor && editor.getModel()) {
            content = editor.getModel().getValue();
          } else {
            const model = editorModels[path];
            content = model ? model.getValue() : (fileContents[path] || '');
          }
      
          // Download the file (can't write to disk inside an iframe)
          const blob = new Blob([content], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = path.split('/').pop();
          a.click();
          URL.revokeObjectURL(url);
      
          fileContents[path] = content;
          modifiedFiles.delete(path);
      
          updateTabModified(path);
          updateTreeModified(path);
          updateModifiedCount();
          termLog('success', `✓ Downloaded: ${path}`);
          toast(`✓ Downloaded ${path.split('/').pop()}`, 'success');
        } catch (err) {
          toast(`Save failed: ${err.message}`, 'error');
          termLog('error', `✗ Save failed: ${path} — ${err.message}`);
        }
      }
      
      // ══════════════════════════════
      //  TABS
      // ══════════════════════════════
      function renderTabs() {
        const bar = document.getElementById('tabBar');
        bar.innerHTML = '';
        for (const tab of openTabs) {
          const el = document.createElement('div');
          el.className = `tab ${tab.path === activeTab ? 'active' : ''} ${modifiedFiles.has(tab.path) ? 'modified' : ''}`;
          el.innerHTML = `
            <span className="tree-icon" style={{fontSize:"10px"}}>${fileIcon(tab.name)}</span>
            <span className="tab-name">${tab.name}</span>
            <span className="tab-close" onClick={() => { closeTab('${tab.path}',event) }}>✕</span>
          `;
          el.onclick = () => setActiveTab(tab.path);
          bar.appendChild(el);
        }
      }
      
      function deleteFile(path) {
        const name = path.split('/').pop();
        if (!confirm('Delete ' + name + '? This removes it from the workspace (not your disk).')) return;
        // Close tab if open
        if (openTabs.find(t => t.path === path)) {
          openTabs = openTabs.filter(t => t.path !== path);
          if (editorModels[path]) { editorModels[path].dispose(); delete editorModels[path]; }
          if (activeTab === path) {
            const next = openTabs[openTabs.length - 1];
            if (next) setActiveTab(next.path);
            else { activeTab = null; document.getElementById('editorPlaceholder').style.display = 'flex'; document.getElementById('editor').style.display = 'none'; }
          }
          renderTabs();
        }
        // Remove from file lists
        delete fileContents[path];
        delete fileHandles[path];
        modifiedFiles.delete(path);
        allFilePaths = allFilePaths.filter(p => p !== path);
        renderTree();
        toast('🗑 Deleted ' + name, 'success');
      }
      
      function closeTab(path, e) {
        e.stopPropagation();
        if (modifiedFiles.has(path)) {
          if (!confirm(`${path.split('/').pop()} has unsaved changes. Close anyway?`)) return;
        }
        openTabs = openTabs.filter(t => t.path !== path);
        if (editorModels[path]) {
          editorModels[path].dispose();
          delete editorModels[path];
        }
        if (activeTab === path) {
          const next = openTabs[openTabs.length - 1];
          if (next) setActiveTab(next.path);
          else {
            activeTab = null;
            document.getElementById('editorPlaceholder').style.display = 'flex';
            document.getElementById('editor').style.display = 'none';
          }
        }
        renderTabs();
      }
      
      function updateTabModified(path) {
        renderTabs();
      }
      
      function updateTreeActive(path) {
        document.querySelectorAll('.tree-item').forEach(el => {
          el.classList.toggle('active', el.dataset.path === path);
        });
      }
      
      function updateTreeModified(path) {
        document.querySelectorAll('.tree-item').forEach(el => {
          if (el.dataset.path === path) {
            el.classList.toggle('modified', modifiedFiles.has(path));
          }
        });
      }
      
      function updateModifiedCount() {
        const n = modifiedFiles.size;
        document.getElementById('sbModified').textContent = `${n} modified`;
      }
      
      // ══════════════════════════════
      //  SEARCH
      // ══════════════════════════════
      let searchIdx = 0;
      let searchMatches = [];
      
      function openSearch() {
        document.getElementById('searchOverlay').classList.add('open');
        setTimeout(() => document.getElementById('searchInput').focus(), 50);
        filterSearch('');
      }
      
      function closeSearch() {
        document.getElementById('searchOverlay').classList.remove('open');
      }
      
      function filterSearch(q) {
        q = q.toLowerCase().trim();
        const paths = q
          ? allFilePaths.filter(p => p.toLowerCase().includes(q))
          : allFilePaths.slice(0, 50);
      
        searchMatches = paths.slice(0, 30);
        searchIdx = 0;
      
        const container = document.getElementById('searchResults');
        container.innerHTML = '';
        for (let i = 0; i < searchMatches.length; i++) {
          const p = searchMatches[i];
          const el = document.createElement('div');
          el.className = `search-result ${i === 0 ? 'active' : ''}`;
          const parts = p.split('/');
          const name = parts.pop();
          const dir = parts.join('/');
          el.innerHTML = `
            <span style={{fontSize:"12px"}}>${fileIcon(name)}</span>
            <div>
              <div>${name}</div>
              <div className="search-result-path">${dir}</div>
            </div>
          `;
          el.onclick = () => { openFile(p); closeSearch(); };
          container.appendChild(el);
        }
      }
      
      function handleSearchKey(e) {
        if (e.key === 'Escape') { closeSearch(); return; }
        if (e.key === 'ArrowDown') {
          searchIdx = Math.min(searchIdx + 1, searchMatches.length - 1);
        } else if (e.key === 'ArrowUp') {
          searchIdx = Math.max(searchIdx - 1, 0);
        } else if (e.key === 'Enter') {
          if (searchMatches[searchIdx]) {
            openFile(searchMatches[searchIdx]);
            closeSearch();
          }
          return;
        } else return;
      
        document.querySelectorAll('.search-result').forEach((el, i) => {
          el.classList.toggle('active', i === searchIdx);
          if (i === searchIdx) el.scrollIntoView({ block: 'nearest' });
        });
      }
      
      // ══════════════════════════════
      //  TERMINAL
      // ══════════════════════════════
      function termLog(type, text) {
        const body = document.getElementById('termBody');
        const el = document.createElement('div');
        el.className = `t-${type}`;
        el.textContent = text;
        body.appendChild(el);
        body.scrollTop = body.scrollHeight;
      }
      
      function handleTermKey(e) {
        if (e.key === 'Enter') {
          const input = document.getElementById('termInput');
          const val = input.value.trim();
          if (!val) return;
          input.value = '';
      
          const el = document.createElement('div');
          el.className = 't-line';
          el.innerHTML = `<span className="t-prompt">studio:~$</span><span className="t-cmd">${escHtml(val)}</span>`;
          document.getElementById('termBody').appendChild(el);
      
          // ── Built-in commands ──
          const cmd = val.toLowerCase().trim();
      
          if (cmd === 'open' || cmd === 'open folder' || cmd === 'open .') {
            termLog('info', '📂 Opening folder picker…');
            openFolder();
          }
          else if (
            cmd === 'close' || cmd === 'close folder' ||
            cmd === 'rm -rf .' || cmd === 'rm -rf *' ||
            cmd === 'delete folder' || cmd === 'clear folder' ||
            cmd === 'reset'
          ) {
            if (activeWsId) closeWorkspace(activeWsId);
            else termLog('warn', '⚠ No folder is open.');
          }
          else if (cmd === 'clear' || cmd === 'cls') {
            clearTerm();
          }
          else if (cmd === 'ls' || cmd === 'dir') {
            if (!allFilePaths.length) {
              termLog('warn', '⚠ No folder open. Run: open');
            } else {
              const roots = [...new Set(allFilePaths.map(p => p.split('/')[0]))].sort();
              roots.forEach(r => termLog('out', `  ${r}`));
              termLog('info', `${allFilePaths.length} total files`);
            }
          }
          else if (cmd === 'help' || cmd === '?') {
            termLog('info', 'Built-in commands:');
            termLog('out',  '  open          — open a folder');
            termLog('out',  '  close         — close current folder');
            termLog('out',  '  rm -rf .      — close current folder');
            termLog('out',  '  ls / dir      — list root entries');
            termLog('out',  '  clear / cls   — clear terminal');
            termLog('warn', '⚠ Other commands must be run in your system terminal.');
          }
          else {
            termLog('warn', '⚠ Run in your system terminal. Type "help" for built-in commands.');
          }
      
          document.getElementById('termBody').scrollTop = 99999;
        }
      }
      
      function toggleTerminal() {
        termOpen = !termOpen;
        document.getElementById('terminalPanel').classList.toggle('collapsed', !termOpen);
      }
      
      function copyTermOutput() {
        const text = document.getElementById('termBody').innerText;
        navigator.clipboard.writeText(text).then(() => toast('📋 Terminal copied'));
      }
      
      function clearTerm() {
        document.getElementById('termBody').innerHTML =
          '<div className="t-info">ℹ Terminal cleared</div>';
      }
      
      // ══════════════════════════════
      //  AI PANEL
      // ══════════════════════════════
      //  VEX ROBOT AI ENGINE
      // ══════════════════════════════
      (function() {
        const vc = document.getElementById('vexC');
        const vBot = document.getElementById('vexBot');
        const vGlow = document.getElementById('vexGlow');
        let vDrag = false, vSX=0, vSY=0, vIX=0, vIY=0;
      
        vc.addEventListener('mousedown', e => {
          if (!e.target.closest('.vex-robot')) return;
          let moved = false;
          const r = vc.getBoundingClientRect();
          vSX=e.clientX; vSY=e.clientY; vIX=r.left; vIY=r.top;
          const mm = ev => {
            const dx=ev.clientX-vSX, dy=ev.clientY-vSY;
            if (!moved && Math.abs(dx)<4 && Math.abs(dy)<4) return;
            moved=true; vDrag=true; vc.classList.add('dragging');
            let x=Math.max(0,Math.min(window.innerWidth-100,vIX+dx));
            let y=Math.max(0,Math.min(window.innerHeight-115,vIY+dy));
            vc.style.right='auto'; vc.style.bottom='auto';
            vc.style.left=x+'px'; vc.style.top=y+'px';
          };
          const mu=()=>{ document.removeEventListener('mousemove',mm); document.removeEventListener('mouseup',mu); setTimeout(()=>vDrag=false,50); };
          document.addEventListener('mousemove',mm);
          document.addEventListener('mouseup',mu);
        });
      
        window.vexState = function(state, duration) {
          vc.classList.remove('vex-active','vex-celebrate','vex-thinking');
          if (state) vc.classList.add('vex-'+state);
          if (duration) setTimeout(()=>{ vc.classList.remove('vex-'+state); if(vexChatOpen)vc.classList.add('vex-active'); }, duration);
        };
        window.vexCelebrate = ()=>vexState('celebrate',700);
        window.vexThink = ()=>vexState('thinking');
      
        vBot.addEventListener('click', e=>{
          if (vDrag) return;
          vBot.classList.add('happy','clicked');
          vGlow.classList.add('bright');
          setTimeout(()=>{ vBot.classList.remove('happy','clicked'); vGlow.classList.remove('bright'); },400);
          vexToggleChat();
        });
      
        const vBub = document.getElementById('vexBubble');
        vBub.addEventListener('click', ()=>{
          const p=vBub._prefill;
          vBub.classList.remove('show');
          if(!vexChatOpen) vexToggleChat();
          if(p) setTimeout(()=>{ const i=document.getElementById('vexInput'); i.value=p; i.focus(); },250);
        });
      })();
      
      let vBubTimer=null;
      function vexShowBubble(text,prefill){
        const b=document.getElementById('vexBubble');
        b.textContent=text; b._prefill=prefill||null;
        b.classList.add('show');
        clearTimeout(vBubTimer);
        vBubTimer=setTimeout(()=>b.classList.remove('show'),7000);
      }
      
      function vexToggleChat(){
        vexChatOpen=!vexChatOpen;
        document.getElementById('vexChat').classList.toggle('open',vexChatOpen);
        if(vexChatOpen){
          vexState('active');
          if(document.getElementById('vexBody').children.length===0) vexWelcome();
          setTimeout(()=>{ document.getElementById('vexInput').focus(); if(window._vexSyncChatPos) _vexSyncChatPos(); },50);
        } else {
          vexState(null);
        }
      }
      
      function toggleAI(){ vexToggleChat(); }
      function openAI(msg,prefill){ if(!vexChatOpen)vexToggleChat(); if(prefill)setTimeout(()=>{ document.getElementById('vexInput').value=prefill; },250); }
      function closeAI(){ if(vexChatOpen)vexToggleChat(); }
      
      // ══════════════════════════════
      //  REGEX SCANNER — deterministic, zero AI
      // ══════════════════════════════
      
      let _vexRegexDecorations = null; // Monaco decoration collection
      
      function _vexUpdateRegexBtn() {
        const btn = document.getElementById('vexRegexBtn');
        if (!btn) return;
        const path = activeTab || '';
        // Show for code files only
        const isCode = /\.(js|ts|jsx|tsx|html|vue|py|rb|go|java|cs|php|rs|swift|kt|c|cpp|h)$/.test(path);
        btn.style.display = isCode ? '' : 'none';
      }
      
      function vexScanRegex() {
        const path = activeTab;
        if (!path) { vexAddMsg('⚠ No file open.', 'bot'); return; }
      
        const w = ws();
        const content = (w && w.editorModels[path]) ? w.editorModels[path].getValue()
          : (w && w.fileContents[path]) || (editor && editor.getModel() ? editor.getModel().getValue() : '');
      
        if (!content.trim()) { vexAddMsg('⚠ File is empty.', 'bot'); return; }
      
        // ── Find all regex ──
        const hits = [];
        const lines = content.split('\n');
      
        lines.forEach((line, lineIdx) => {
          // 1. Literal regex:  /pattern/flags  (skip // comments and URLs)
          const litRe = /(?<![:/])\/(?![/*\s])([^\/\n\\]|\\.)+\/[gimsuy]*/g;
          let m;
          while ((m = litRe.exec(line)) !== null) {
            hits.push({
              line: lineIdx + 1,
              col: m.index + 1,
              colEnd: m.index + m[0].length + 1,
              raw: m[0],
              type: 'literal'
            });
          }
      
          // 2. new RegExp('...') or new RegExp("...")
          const newRe = /new\s+RegExp\s*\(\s*(['"`])([^'"` ]+)\1\s*(?:,\s*['"`]([gimsuy]+)['"`])?\s*\)/g;
          while ((m = newRe.exec(line)) !== null) {
            const pat = '/' + m[2] + '/' + (m[3] || '');
            hits.push({
              line: lineIdx + 1,
              col: m.index + 1,
              colEnd: m.index + m[0].length + 1,
              raw: pat,
              type: 'new RegExp'
            });
          }
        });
      
        // ── Clear old decorations ──
        if (_vexRegexDecorations) { _vexRegexDecorations.clear(); _vexRegexDecorations = null; }
      
        if (hits.length === 0) {
          vexAddMsg('No regex found in <code>' + path.split('/').pop() + '</code>.', 'bot');
          return;
        }
      
        // ── Highlight in Monaco ──
        const decorations = hits.map(h => ({
          range: new monaco.Range(h.line, h.col, h.line, h.colEnd),
          options: {
            inlineClassName: 'vex-regex-highlight',
            hoverMessage: { value: '🔍 **Regex** `' + h.raw + '`  (' + h.type + ')' }
          }
        }));
        _vexRegexDecorations = editor.createDecorationsCollection(decorations);
      
        // ── Render results in chat ──
        if (!vexChatOpen) vexToggleChat();
        const body = document.getElementById('vexBody');
      
        const hdr = document.createElement('div');
        hdr.className = 'vex-ws-msg bot';
        hdr.innerHTML = '🔍 Found <b>' + hits.length + ' regex pattern' + (hits.length === 1 ? '' : 's') + '</b>'
          + ' in <code>' + path.split('/').pop() + '</code> — click to jump:';
        body.appendChild(hdr);
      
        hits.forEach(h => {
          const row = document.createElement('div');
          row.className = 'vex-regex-hit';
          row.title = 'Jump to line ' + h.line;
          row.innerHTML = '<span className="rh-line">L' + h.line + '</span>'
            + '<span className="rh-pat">' + h.raw.replace(/</g,'&lt;') + '</span>'
            + '<span className="rh-type">' + h.type + '</span>';
          row.onclick = () => {
            editor.revealLineInCenter(h.line);
            editor.setPosition({ lineNumber: h.line, column: h.col });
            editor.focus();
          };
          body.appendChild(row);
        });
      
        const clear = document.createElement('button');
        clear.textContent = '✕ Clear highlights';
        clear.style.cssText = 'margin-top:6px;padding:3px 10px;border-radius:5px;border:1px solid #334455;background:none;color:#556677;cursor:pointer;font-size:10px';
        clear.onclick = () => {
          if (_vexRegexDecorations) { _vexRegexDecorations.clear(); _vexRegexDecorations = null; }
          clear.textContent = '✓ Cleared';
          clear.disabled = true;
        };
        body.appendChild(clear);
        body.scrollTop = body.scrollHeight;
      }
      
      
      
      function triggerAIFileOpen(filename){
        const el=document.getElementById('vexCtxFile');
        if(el) el.textContent=filename;
        const isHtml = filename.endsWith('.html');
        const isTsx = filename.endsWith('.tsx') || filename.endsWith('.ts') || filename.endsWith('.jsx');
      
        // Auto-detect inline CSS in TSX files — offer to fix
        if (isTsx && activeTab) {
          var content = fileContents[activeTab] || '';
          var hasStyleBlock = /';
          });
          // Inline <script src="...">
          htmlContent = htmlContent.replace(/<script([^>]*)\ssrc=['"]([^'"]+)['"]([^>]*)><\/script>/gi, function(match, pre, src, post) {
            if (src.startsWith('http') || src.startsWith('//') || src.startsWith('data:')) return match;
            var resolved = resolvePath(htmlPath, src);
            if (!resolved) return match;
            var js = fileContents[resolved];
            if (js === undefined) return match;
            return '<script' + pre + post + '>' + js + '<\/script>';
          });
          return htmlContent;
        }
      
        // On http(s):// use blob URLs as before
        var visited = new Set([htmlPath]);
        var baseDir = htmlPath.includes('/') ? htmlPath.slice(0, htmlPath.lastIndexOf('/')) : '';
      
        // Replace  stylesheet references
        htmlContent = htmlContent.replace(/]*)\shref=['"]([^'"]+)['"]([^>]*)>/gi, function(match, pre, href, post) {
          var resolved = resolvePath(htmlPath, href);
          if (!resolved) return match;
          var blobUrl = makeBlobForPath(resolved, new Set(visited));
          return blobUrl ? '' : match;
        });
      
        // Replace <script src="..."> references
        htmlContent = htmlContent.replace(/<script([^>]*)\ssrc=['"]([^'"]+)['"]([^>]*)>/gi, function(match, pre, src, post) {
          var resolved = resolvePath(htmlPath, src);
          if (!resolved) return match;
          var blobUrl = makeBlobForPath(resolved, new Set(visited));
          return blobUrl ? '<script' + pre + ' src="' + blobUrl + '"' + post + '>' : match;
        });
      
        // Replace <img src="..." /> references
        htmlContent = htmlContent.replace(/<img([^ />]*)\ssrc=['"]([^'"]+)['"]([^>]*)>/gi, function(match, pre, src, post) {
          var resolved = resolvePath(htmlPath, src);
          if (!resolved) return match;
          var blobUrl = makeBlobForPath(resolved, new Set(visited));
          return blobUrl ? '<img' + pre + ' src="' + blobUrl + '"' + post + ' />' : match;
        });
      
        // Replace inline style url() references
        htmlContent = htmlContent.replace(/url\(['"]?([^'")]+)['"]?\)/g, function(match, ref) {
          if (ref.startsWith('http') || ref.startsWith('data:') || ref.startsWith('blob:')) return match;
          var resolved = resolvePath(htmlPath, ref);
          if (!resolved) return match;
          var blobUrl = makeBlobForPath(resolved, new Set(visited));
          return blobUrl ? 'url("' + blobUrl + '")' : match;
        });
      
        return htmlContent;
      }
      
      function refreshPreview() {
        if (!previewOpen) return;
        var path = activeTab;
        if (!path || !path.endsWith('.html')) return;
        var dot = document.getElementById('previewDot');
        var fname = document.getElementById('previewFileName');
        if (dot) dot.classList.add('updating');
        if (fname) fname.textContent = path.split('/').pop();
      
        var content = (editor && editor.getModel()) ? editor.getModel().getValue() : (fileContents[path] || '');
        revokeAllBlobs();
        var stitched = stitchHtml(path, content);
      
        var frame = document.getElementById('previewFrame');
        if (!frame) return;
      
        // Try blob URL first; fall back to srcdoc if we're on file:// (blob:null)
        try {
          var blob = new Blob([stitched], {type: 'text/html'});
          var url = URL.createObjectURL(blob);
          if (!url || url.startsWith('blob:null')) {
            // file:// context — use srcdoc instead
            if (frame._blobUrl) { URL.revokeObjectURL(frame._blobUrl); frame._blobUrl = null; }
            frame.removeAttribute('src');
            frame.srcdoc = stitched;
          } else {
            if (frame._blobUrl) URL.revokeObjectURL(frame._blobUrl);
            frame._blobUrl = url;
            frame.removeAttribute('srcdoc');
            frame.src = url;
          }
        } catch(e) {
          frame.srcdoc = stitched;
        }
      
        setTimeout(function(){ if(dot) dot.classList.remove('updating'); }, 600);
      }
      
      function schedulePreviewRefresh() {
        if (!previewOpen) return;
        var dot = document.getElementById('previewDot');
        if (dot) dot.classList.add('updating');
        clearTimeout(previewTimer);
        previewTimer = setTimeout(refreshPreview, 900);
      }
      
      function initSplitResizer() {
        var resizer = document.getElementById('splitResizer');
        if (resizer._inited) return; // only init once
        resizer._inited = true;
      
        var edPane = document.getElementById('editorPane');
        var prePane = document.getElementById('previewPane');
        var split = document.getElementById('editorSplit');
        var dragging = false;
        var startX, startEdW;
      
        resizer.addEventListener('mousedown', function(e) {
          dragging = true;
          startX = e.clientX;
          startEdW = edPane.getBoundingClientRect().width;
          resizer.classList.add('dragging');
          document.body.style.cursor = 'col-resize';
          document.body.style.userSelect = 'none';
          // Cover iframe so it doesn't eat mouse events during drag
          var cover = document.getElementById('previewCover');
          if (!cover) {
            cover = document.createElement('div');
            cover.id = 'previewCover';
            cover.style.cssText = 'position:absolute;inset:0;z-index:999;cursor:col-resize;';
            prePane.style.position = 'relative';
            prePane.appendChild(cover);
          }
          cover.style.display = 'block';
          e.preventDefault();
        });
      
        document.addEventListener('mousemove', function(e) {
          if (!dragging) return;
          var dx = e.clientX - startX;
          var totalW = split.getBoundingClientRect().width - 5; // minus resizer width
          var newEdW = Math.max(150, Math.min(totalW - 150, startEdW + dx));
          edPane.style.flex = 'none';
          edPane.style.width = newEdW + 'px';
          prePane.style.flex = '1';
          prePane.style.width = '';
          if (editor) editor.layout();
        });
      
        document.addEventListener('mouseup', function() {
          if (!dragging) return;
          dragging = false;
          resizer.classList.remove('dragging');
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          var cover = document.getElementById('previewCover');
          if (cover) cover.style.display = 'none';
          if (editor) editor.layout();
        });
      }
      
      
      // ══════════════════════════════
      //  NEXT.JS CONVERTER
      // ══════════════════════════════
      // ===== VITE + REACT + SUPABASE CONVERTER =====
      var _vtcConverting = false;
      var _vtcMode = 'supabase'; // 'supabase' | 'vite'
      
      function openViteConverter() {
        if (!vexChatOpen) vexToggleChat();
        vexAddMsg('⚡ <b>Convert to Vite + React</b><br /><br />Two options:<br /><br />'
          + '🔋 <b>Vite + Supabase</b> — adds a login gate, user accounts. Best for paid tools or anything that needs auth.<br /><br />'
          + '⚡ <b>Vite only</b> — tool loads directly, no login. Best for free public tools or when you want to add auth later.<br /><br />'
          + 'Both preserve your original tool in <code>public/tool.html</code> untouched. Opening converter now…');
        setTimeout(function() {
          document.getElementById('vtcOverlay').classList.add('open');
          renderVtcPanel();
        }, 800);
      }
      function closeViteConverter() {
        if (_vtcConverting) return;
        document.getElementById('vtcOverlay').classList.remove('open');
      }
      
      // Auto-detect API keys needed from HTML source
      function detectApiKeys(htmlContent) {
        var found = [];
        var already = {};
        function suggest(name, hint) {
          if (!already[name]) { already[name] = true; found.push({ name: name, hint: hint, value: '' }); }
        }
        // VITE_ vars already referenced in code
        var viteRe = /VITE_([A-Z0-9_]+)/g;
        var vm;
        while ((vm = viteRe.exec(htmlContent)) !== null) {
          if (vm[1] !== 'SUPABASE_URL' && vm[1] !== 'SUPABASE_ANON_KEY') {
            suggest('VITE_' + vm[1], 'referenced in code');
          }
        }
        // localStorage key patterns — common API key storage
        var lsRe = /localStorage\.(getItem|setItem)\(['"]([^'"]+)['"]/g;
        var lm;
        while ((lm = lsRe.exec(htmlContent)) !== null) {
          var k = lm[2];
          if (/key|token|secret|api/i.test(k)) {
            var envName = 'VITE_' + k.replace(/[^a-zA-Z0-9]/g,'_').toUpperCase();
            suggest(envName, 'from localStorage("' + k + '")');
          }
        }
        // Known API endpoint → suggest key name
        var endpoints = [
          { pattern: 'api.anthropic.com', name: 'VITE_ANTHROPIC_API_KEY', hint: 'Claude / Anthropic API' },
          { pattern: 'api.openai.com',    name: 'VITE_OPENAI_API_KEY',    hint: 'OpenAI API' },
          { pattern: 'generativelanguage.googleapis.com', name: 'VITE_GEMINI_API_KEY', hint: 'Google Gemini API' },
          { pattern: 'api.github.com',    name: 'VITE_GITHUB_TOKEN',      hint: 'GitHub API' },
          { pattern: 'api.stripe.com',    name: 'VITE_STRIPE_PUBLIC_KEY', hint: 'Stripe' },
          { pattern: 'maps.googleapis.com', name: 'VITE_GOOGLE_MAPS_KEY', hint: 'Google Maps' },
        ];
        endpoints.forEach(function(e) {
          if (htmlContent.indexOf(e.pattern) !== -1) suggest(e.name, e.hint);
        });
        return found;
      }
      
      function renderVtcPanel() {
        var body = document.getElementById('vtcBody');
        body.innerHTML = '';
        _vtcConverting = false;
      
        if (!ws() || ws().allFilePaths.length === 0) {
          body.innerHTML = '<div className="nxc-info">Open a project with HTML files first.</div>';
          return;
        }
      
        var htmlFiles = ws().allFilePaths.filter(function(p) {
          if (!p.endsWith('.html')) return false;
          var lower = p.toLowerCase();
          if (lower.includes('/node_modules/')) return false;
          if (lower.includes('/dist/')) return false;
          if (lower.includes('/vendor/')) return false;
          return true;
        });
      
        if (htmlFiles.length === 0) {
          body.innerHTML = '<div className="nxc-info">No HTML files found in the current workspace.</div>';
          return;
        }
      
        var nameDiv = document.createElement('div');
        nameDiv.innerHTML = '<div className="nxc-section-title">Project Name</div>'
          + '<input className="nxc-input" id="vtcProjName" value="' + (ws().name.toLowerCase().replace(/[^a-z0-9-]/g,'-') || 'my-app') + '" placeholder="my-vite-app" />';
        body.appendChild(nameDiv);
      
        var sbDiv = document.createElement('div');
        sbDiv.id = 'vtcSbSection';
        sbDiv.style.cssText = 'margin-top:10px';
        var sbTitleRow = document.createElement('div');
        sbTitleRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:6px';
        sbTitleRow.innerHTML = '<div className="nxc-section-title" style={{margin:"0"}}>Supabase Credentials <span style={{color:"#556677",fontWeight:400,textTransform:"none",fontSize:"10px"}}>(optional — add later in .env)</span></div>';
        var sbHelpBtn = document.createElement('button');
        sbHelpBtn.textContent = '? What is this';
        sbHelpBtn.style.cssText = 'background:none;border:1px solid #1e3044;border-radius:5px;color:#556677;font-size:10px;padding:2px 8px;cursor:pointer;font-family:inherit';
        sbHelpBtn.onmouseenter = function(){ sbHelpBtn.style.color='#a78bfa'; sbHelpBtn.style.borderColor='rgba(167,139,250,0.4)'; };
        sbHelpBtn.onmouseleave = function(){ sbHelpBtn.style.color='#556677'; sbHelpBtn.style.borderColor='#1e3044'; };
        sbHelpBtn.onclick = function() {
          closeViteConverter();
          if (!vexChatOpen) vexToggleChat();
          vexAddMsg(
            '🔋 <b>What is Supabase and do you need it?</b><br /><br />'
            + 'Supabase is a free backend that gives your tool <b>user login, accounts and a database</b>. Think of it as your app\'s backend without writing any server code.<br /><br />'
            + '<b>Do you need it?</b><br />'
            + '• <b>No</b> — if your tool is public and anyone can use it (no login needed)<br />'
            + '• <b>Yes</b> — if you want users to sign up, save their work, or you want to charge for access<br /><br />'
            + '<b>How to set it up (free):</b><br /><br />'
            + '<b>1.</b> Go to <a href="https://supabase.com" target="_blank" style={{color:"#a78bfa"}}>supabase.com</a> and click <b>Start for free</b><br />'
            + '<b>2.</b> Sign up with GitHub or email<br />'
            + '<b>3.</b> Click <b>New project</b> — give it the name of your tool<br />'
            + '<b>4.</b> Pick a region close to your users (e.g. EU West)<br />'
            + '<b>5.</b> Set a database password (save it somewhere)<br />'
            + '<b>6.</b> Wait ~1 min for it to provision<br />'
            + '<b>7.</b> Go to <b>Project Settings → API</b><br />'
            + '<b>8.</b> Copy <b>Project URL</b> → paste into the URL field<br />'
            + '<b>9.</b> Copy <b>Publishable API Key</b> → paste into the key field<br /><br />'
            + '📌 Direct link once logged in: <a href="https://supabase.com/dashboard" target="_blank" style={{color:"#a78bfa"}}>supabase.com/dashboard</a><br />'
            + '📖 Docs: <a href="https://supabase.com/docs" target="_blank" style={{color:"#a78bfa"}}>supabase.com/docs</a><br /><br />'
            + '<b>Free tier includes:</b> 50,000 monthly active users, 500MB database, unlimited auth — plenty to launch with.<br /><br />'
            + 'Leave the fields blank for now if you haven\'t set it up yet — you can add the keys to <code>.env</code> later.'
          );
          vexAddBtns([
            { label: '↩ Back to converter', action: function() { openViteConverter(); } },
            { label: '🌐 Open Supabase', action: function() { window.open('https://supabase.com','_blank'); } }
          ]);
        };
        sbTitleRow.appendChild(sbHelpBtn);
        sbDiv.appendChild(sbTitleRow);
        var sbInputs = document.createElement('div');
        sbInputs.innerHTML = '<input className="nxc-input" id="vtcSbUrl" placeholder="Project URL — https://xxx.supabase.co" style={{marginBottom:"6px"}} />'
          + '<input className="nxc-input" id="vtcSbKey" placeholder="Publishable API Key (anon public)" />';
        sbDiv.appendChild(sbInputs);
        body.appendChild(sbDiv);
      
        // --- API KEYS SECTION ---
        var allHtml = ws().allFilePaths
          .filter(function(p){ return p.endsWith('.html'); })
          .map(function(p){ return ws().fileContents[p] || ''; })
          .join('\n');
        var detectedKeys = detectApiKeys(allHtml);
      
        // All known presets
        var VTC_PRESETS = [
          { emoji:'🤖', label:'Claude',        name:'VITE_ANTHROPIC_API_KEY',      url:'console.anthropic.com' },
          { emoji:'🧠', label:'OpenAI',        name:'VITE_OPENAI_API_KEY',         url:'platform.openai.com/api-keys' },
          { emoji:'♊', label:'Gemini',        name:'VITE_GEMINI_API_KEY',         url:'aistudio.google.com' },
          { emoji:'🌀', label:'Mistral',       name:'VITE_MISTRAL_API_KEY',        url:'console.mistral.ai' },
          { emoji:'🦙', label:'Together AI',   name:'VITE_TOGETHER_API_KEY',       url:'api.together.ai' },
          { emoji:'⚡', label:'Groq',          name:'VITE_GROQ_API_KEY',           url:'console.groq.com' },
          { emoji:'🐙', label:'GitHub',        name:'VITE_GITHUB_TOKEN',           url:'github.com/settings/tokens' },
          { emoji:'💳', label:'Stripe',        name:'VITE_STRIPE_PUBLIC_KEY',      url:'dashboard.stripe.com/apikeys' },
          { emoji:'🗺️', label:'Google Maps',   name:'VITE_GOOGLE_MAPS_KEY',        url:'console.cloud.google.com' },
          { emoji:'🔍', label:'Google Search', name:'VITE_GOOGLE_SEARCH_KEY',      url:'console.cloud.google.com' },
          { emoji:'🌤️', label:'OpenWeather',   name:'VITE_OPENWEATHER_KEY',        url:'openweathermap.org/api_keys' },
          { emoji:'✉️', label:'Resend',        name:'VITE_RESEND_API_KEY',         url:'resend.com/api-keys' },
          { emoji:'📧', label:'SendGrid',      name:'VITE_SENDGRID_API_KEY',       url:'app.sendgrid.com' },
          { emoji:'💬', label:'Twilio',        name:'VITE_TWILIO_API_KEY',         url:'console.twilio.com' },
          { emoji:'🖼️', label:'Cloudinary',    name:'VITE_CLOUDINARY_KEY',         url:'cloudinary.com/console' },
          { emoji:'🌍', label:'Mapbox',        name:'VITE_MAPBOX_TOKEN',           url:'account.mapbox.com' },
          { emoji:'🔎', label:'Algolia',       name:'VITE_ALGOLIA_APP_ID',         url:'dashboard.algolia.com' },
          { emoji:'📊', label:'Airtable',      name:'VITE_AIRTABLE_API_KEY',       url:'airtable.com/account' },
          { emoji:'🪄', label:'Replicate',     name:'VITE_REPLICATE_API_TOKEN',    url:'replicate.com/account' },
          { emoji:'🎨', label:'Stability AI',  name:'VITE_STABILITY_API_KEY',      url:'platform.stability.ai' },
        ];
      
        var apiSection = document.createElement('div');
        apiSection.style.cssText = 'margin-top:12px';
      
        var apiTitle = document.createElement('div');
        apiTitle.className = 'nxc-section-title';
        apiTitle.style.cssText = 'margin-bottom:8px';
        apiTitle.textContent = 'API Keys';
        apiSection.appendChild(apiTitle);
      
        // Preset grid
        var presetGrid = document.createElement('div');
        presetGrid.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px';
      
        VTC_PRESETS.forEach(function(preset) {
          var alreadyAdded = false;
          var btn = document.createElement('button');
          btn.dataset.presetName = preset.name;
          btn.style.cssText = 'display:flex;align-items:center;gap:4px;background:#0d1b2a;border:1px solid #1e3044;border-radius:6px;color:#c8c8e0;font-size:11px;padding:4px 8px;cursor:pointer;font-family:inherit;transition:all 0.15s';
          btn.innerHTML = '<span>' + preset.emoji + '</span><span>' + preset.label + '</span>';
          // highlight if auto-detected
          var isDetected = detectedKeys.some(function(k){ return k.name === preset.name; });
          if (isDetected) {
            btn.style.cssText = 'display:flex;align-items:center;gap:4px;background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.4);border-radius:6px;color:#4ade80;font-size:11px;padding:4px 8px;cursor:pointer;font-family:inherit;transition:all 0.15s';
            btn.title = 'Detected in your code — click to add';
          }
          btn.onmouseenter = function(){ if(!btn.dataset.added) btn.style.borderColor='#a78bfa'; btn.style.color=btn.dataset.added?'#a78bfa':'#a78bfa'; };
          btn.onmouseleave = function(){
            if(!btn.dataset.added) {
              btn.style.borderColor = isDetected ? 'rgba(74,222,128,0.4)' : '#1e3044';
              btn.style.color = isDetected ? '#4ade80' : '#c8c8e0';
            }
          };
          btn.onclick = function() {
            if (btn.dataset.added) return;
            btn.dataset.added = '1';
            btn.style.cssText = 'display:flex;align-items:center;gap:4px;background:rgba(167,139,250,0.12);border:1px solid rgba(167,139,250,0.5);border-radius:6px;color:#a78bfa;font-size:11px;padding:4px 8px;cursor:default;font-family:inherit;opacity:0.7';
            addKeyRow(preset.name, '', preset.label + ' — ' + preset.url, btn);
          };
          presetGrid.appendChild(btn);
        });
      
        apiSection.appendChild(presetGrid);
      
        // Active keys list
        var keyList = document.createElement('div');
        keyList.id = 'vtcKeyList';
        keyList.style.cssText = 'display:flex;flex-direction:column;gap:6px';
        apiSection.appendChild(keyList);
      
        // Env preview hint
        var envHint = document.createElement('div');
        envHint.id = 'vtcEnvHint';
        envHint.style.cssText = 'font-size:10px;color:#556677;font-family:monospace;background:#060f18;border:1px solid #1e3044;border-radius:6px;padding:7px 10px;margin-top:6px;display:none;line-height:1.7';
        apiSection.appendChild(envHint);
      
        // Custom key row at bottom
        var customRow = document.createElement('div');
        customRow.style.cssText = 'display:flex;align-items:center;gap:5px;margin-top:4px';
        customRow.innerHTML = '<input className="nxc-input" id="vtcCustomKeyName" placeholder="VITE_MY_CUSTOM_KEY" style={{flex:"1",fontSize:"11px",padding:"6px 10px",fontFamily:"monospace"}} />'
          + '<button onClick={() => { vtcAddCustomKey() }} style={{background:"none",border:"1px solid #1e3044",borderRadius:"5px",color:"#a78bfa",fontSize:"11px",padding:"5px 10px",cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"}}>+ Add custom</button>';
        apiSection.appendChild(customRow);
      
        body.appendChild(apiSection);
      
        function updateEnvHint() {
          var rows = keyList.querySelectorAll('.vtc-key-row');
          if (rows.length === 0) { envHint.style.display='none'; return; }
          envHint.style.display = 'block';
          var lines = ['<span style={{color:"#556677"}}># .env preview</span>'];
          rows.forEach(function(row) {
            var n = row.querySelector('.vtc-key-name').value || 'VITE_KEY';
            var v = row.querySelector('.vtc-key-val').value || 'your-key-here';
            lines.push('<span style={{color:"#a78bfa"}}>' + n + '</span>=<span style={{color:"#4ade80"}}>' + (v === 'your-key-here' ? v : '••••••') + '</span>');
          });
          envHint.innerHTML = lines.join('<br />');
        }
      
        function addKeyRow(name, value, hint, presetBtn) {
          var row = document.createElement('div');
          row.className = 'vtc-key-row';
          row.style.cssText = 'display:flex;gap:5px;align-items:center';
      
          var nameIn = document.createElement('input');
          nameIn.className = 'nxc-input vtc-key-name';
          nameIn.value = name || '';
          nameIn.readOnly = !!presetBtn;
          nameIn.style.cssText = 'flex:1;font-size:11px;padding:6px 10px;font-family:monospace;color:#a78bfa;' + (presetBtn ? 'opacity:0.8;cursor:default;' : '');
      
          var valIn = document.createElement('input');
          valIn.className = 'nxc-input vtc-key-val';
          valIn.placeholder = value ? value : 'paste key here (optional)';
          valIn.value = '';
          valIn.type = 'password';
          valIn.title = hint || '';
          valIn.style.cssText = 'flex:1.4;font-size:11px;padding:6px 10px';
          valIn.oninput = updateEnvHint;
      
          var delBtn = document.createElement('button');
          delBtn.textContent = '✕';
          delBtn.style.cssText = 'background:none;border:none;color:#556677;cursor:pointer;font-size:12px;padding:0 4px;font-family:inherit';
          delBtn.onclick = function() {
            row.remove();
            if (presetBtn) { delete presetBtn.dataset.added; presetBtn.style.cssText = 'display:flex;align-items:center;gap:4px;background:#0d1b2a;border:1px solid #1e3044;border-radius:6px;color:#c8c8e0;font-size:11px;padding:4px 8px;cursor:pointer;font-family:inherit;transition:all 0.15s'; }
            updateEnvHint();
          };
      
          row.appendChild(nameIn);
          row.appendChild(valIn);
          row.appendChild(delBtn);
          keyList.appendChild(row);
          updateEnvHint();
          valIn.focus();
        }
      
        // Just highlight detected keys in green — don't auto-add anything
        // User clicks what they actually need
      
        window.vtcAddCustomKey = function() {
          var inp = document.getElementById('vtcCustomKeyName');
          var val = inp.value.trim().toUpperCase().replace(/[^A-Z0-9_]/g,'_');
          if (!val) return;
          if (!val.startsWith('VITE_')) val = 'VITE_' + val;
          inp.value = '';
          addKeyRow(val, '', 'custom key', null);
        };
      
        var filesDiv = document.createElement('div');
        filesDiv.innerHTML = '<div className="nxc-section-title" style={{marginTop:"10px"}}>HTML Tool File</div>';
        var fileList = document.createElement('div');
        fileList.className = 'nxc-file-list';
        htmlFiles.forEach(function(p) {
          var row = document.createElement('div');
          row.className = 'nxc-file-row';
          var fname = p.split('/').slice(1).join('/');
          row.innerHTML = '<input type="radio" name="vtcFile" className="nxc-file-check" value="' + p + '" ' + (htmlFiles.indexOf(p)===0?'checked':'') + ' />'
            + '<span className="nxc-file-name">' + fname + '</span>'
            + '<span className="nxc-file-route" style={{background:"rgba(167,139,250,0.1)",color:"#a78bfa"}}>main tool</span>';
          fileList.appendChild(row);
        });
        filesDiv.appendChild(fileList);
        body.appendChild(filesDiv);
      
        var infoDiv = document.createElement('div');
        infoDiv.className = 'nxc-info';
        infoDiv.style.cssText = 'background:rgba(167,139,250,0.06);border-color:rgba(167,139,250,0.2);margin-top:4px';
        infoDiv.innerHTML = '<strong style={{color:"#a78bfa"}}>What gets generated:</strong><br />'
          + '🔑 <code>src/supabase.ts</code> — Supabase client<br />'
          + '⚙️ <code>src/config.ts</code> — all API keys exported<br />'
          + '⚛ <code>src/App.tsx</code> — React shell with auth gate<br />'
          + '🔐 <code>src/components/Auth.tsx</code> — login/signup UI<br />'
          + '📋 <code>src/components/Dashboard.tsx</code> — tool wrapper<br />'
          + '🌐 <code>public/tool.html</code> — your original tool (preserved)<br />'
          + '📦 <code>package.json</code>, <code>vite.config.ts</code>, <code>vercel.json</code>, <code>.env</code>';
        body.appendChild(infoDiv);
      
        var btnRow = document.createElement('div');
        btnRow.style.cssText = 'display:flex;gap:8px;margin-top:4px;flex-wrap:wrap';
        var convertBtn = document.createElement('button');
        convertBtn.className = 'nxc-btn';
        convertBtn.style.cssText = 'background:linear-gradient(135deg,#7c3aed,#a78bfa);color:#fff;font-size:12px;padding:10px 16px;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-family:inherit';
        convertBtn.textContent = '🔋 Vite + Supabase';
        convertBtn.title = 'With login/auth gate';
        convertBtn.onclick = function(){ _vtcMode = 'supabase'; if(sbDiv) sbDiv.style.display=''; runViteConverter(); };
        var convertBtnSimple = document.createElement('button');
        convertBtnSimple.className = 'nxc-btn';
        convertBtnSimple.style.cssText = 'background:linear-gradient(135deg,#1e3a5f,#3b82f6);color:#fff;font-size:12px;padding:10px 16px;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-family:inherit';
        convertBtnSimple.textContent = '⚡ Vite only';
        convertBtnSimple.title = 'No login, tool loads directly';
        convertBtnSimple.onclick = function(){ _vtcMode = 'vite'; if(sbDiv) sbDiv.style.display='none'; runViteConverter(); };
        btnRow.appendChild(convertBtn);
        btnRow.appendChild(convertBtnSimple);
        body.appendChild(btnRow);
      }
      
      async function runViteConverter() {
        var body = document.getElementById('vtcBody');
        var projName = (document.getElementById('vtcProjName').value.trim() || 'my-app').toLowerCase().replace(/[^a-z0-9-]/g,'-');
        var sbUrl = document.getElementById('vtcSbUrl').value.trim();
        var sbKey = document.getElementById('vtcSbKey').value.trim();
      
        // Collect API keys from the key list
        var extraKeys = [];
        document.querySelectorAll('#vtcKeyList .vtc-key-row').forEach(function(row) {
          var nameIn = row.querySelector('.vtc-key-name');
          var valIn = row.querySelector('.vtc-key-val');
          if (nameIn && nameIn.value.trim()) {
            extraKeys.push({ name: nameIn.value.trim(), value: valIn ? valIn.value.trim() : '' });
          }
        });
        var selectedFile = document.querySelector('input[name="vtcFile"]:checked');
        if (!selectedFile) { alert('Select an HTML file first.'); return; }
        var htmlPath = selectedFile.value;
        var htmlContent = ws().fileContents[htmlPath] || '';
      
        _vtcConverting = true;
        body.innerHTML = '';
      
        var progressDiv = document.createElement('div');
        progressDiv.className = 'nxc-progress';
        progressDiv.innerHTML = '<div style={{display:"flex",justifyContent:"space-between",marginBottom:"6px"}}>'
          + '<span id="vtcStatus" style={{fontSize:"11px",color:"#a78bfa",fontWeight:600}}>Converting…</span>'
          + '<span id="vtcPct" style={{fontSize:"11px",color:"#556677"}}>0%</span></div>'
          + '<div className="nxc-progress-bar-wrap"><div className="nxc-progress-bar" id="vtcBar" style={{background:"linear-gradient(90deg,#7c3aed,#a78bfa)",width:"0%"}}></div></div>';
        body.appendChild(progressDiv);
      
        var logEl = document.createElement('div');
        logEl.className = 'nxc-log';
        body.appendChild(logEl);
      
        function setProgress(pct) {
          document.getElementById('vtcBar').style.width = pct + '%';
          document.getElementById('vtcPct').textContent = pct + '%';
        }
        function setStatus(s) { var el = document.getElementById('vtcStatus'); if(el) el.textContent = s; }
        function log(msg, cls) {
          var line = document.createElement('div');
          line.className = 'nxc-log-line' + (cls ? ' ' + cls : '');
          line.innerHTML = msg;
          logEl.appendChild(line);
          logEl.scrollTop = logEl.scrollHeight;
        }
      
        log('Extracting CSS, JS and HTML…');
        setProgress(10);
      
        var cssContent = '';
        var styleRe = /\n')
            .replace('
    </>
  )
}