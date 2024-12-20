/* src/Logo.css */

.logo {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Fira Code', monospace;
}

.initials {
  background: linear-gradient(135deg, #4A90E2, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo:hover .initials {
  color: #333; /* Hover effect */
}