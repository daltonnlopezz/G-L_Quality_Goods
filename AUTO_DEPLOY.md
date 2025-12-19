# Auto-Deployment Setup

Your Render Blueprint is configured for automatic deployments!

## How It Works

When you push commits to the `main` branch on GitHub, Render will automatically:
1. Detect the new commit
2. Sync the Blueprint
3. Build and deploy your application

## Verify Auto-Deployment is Enabled

### In Render Dashboard:

1. Go to your Blueprint: **G&L Quality Goods**
2. Click on **Settings**
3. Verify **Auto Sync** is set to **"Yes"**
   - If it's "No", click **Edit** and change it to **"Yes"**
   - This enables automatic syncing when `render.yaml` changes

### For Individual Web Services:

If you're using individual web services (not Blueprint):

1. Go to your web service: **gl-quality-goods**
2. Click on **Settings**
3. Scroll to **"Auto-Deploy"** section
4. Ensure it's set to **"Yes"**
5. Verify the branch is set to **"main"**

## How to Test

1. Make a small change to any file
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test auto-deployment"
   git push
   ```
3. Go to Render dashboard
4. You should see a new deployment start automatically within a few seconds

## Current Configuration

- **Repository**: `daltonnlopezz/G-L_Quality_Goods`
- **Branch**: `main`
- **Auto Sync**: Enabled (if set to "Yes" in Blueprint settings)
- **Deployment Trigger**: Every push to `main` branch

## Manual Deployment

If you ever need to deploy manually:

1. In Render dashboard, click **"Manual sync"** (for Blueprints)
2. Or click **"Manual Deploy"** → **"Deploy latest commit"** (for web services)

## Troubleshooting

### Auto-deployment not working?

1. **Check Auto Sync setting**
   - Go to Blueprint Settings
   - Ensure "Auto Sync" is set to "Yes"

2. **Verify branch name**
   - Ensure you're pushing to `main` branch
   - Check: `git branch` (should show `* main`)

3. **Check GitHub webhook**
   - Render should have automatically set up a webhook
   - Go to GitHub → Settings → Webhooks
   - You should see a Render webhook (if not, Render will create it automatically)

4. **Verify repository connection**
   - In Render, check that the repository is properly connected
   - The repository should show: `daltonnlopezz / G-L_Quality_Goods`

## Notes

- **Free tier**: Deployments may take a few minutes
- **Build time**: First build takes longer, subsequent builds are faster
- **Notifications**: You can set up email notifications for deployment status in Render settings

