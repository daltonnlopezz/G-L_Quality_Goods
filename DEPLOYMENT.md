# Deploying to Render

This guide will help you deploy your G&L Quality Goods Next.js application to Render.

## Prerequisites

1. A GitHub account (or GitLab/Bitbucket)
2. A Render account (sign up at [render.com](https://render.com))
3. Your code pushed to a Git repository

## Deployment Steps

### Option 1: Using Render Blueprint (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Connect to Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

3. **Deploy**
   - Render will create the web service based on the configuration
   - The deployment will start automatically
   - You can monitor the build logs in the Render dashboard

### Option 2: Manual Setup

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Create a new Web Service**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository

3. **Configure the Service**
   - **Name**: `gl-quality-goods` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or choose a paid plan)

4. **Environment Variables** (if needed)
   - Add any environment variables your app requires
   - `NODE_ENV` is automatically set to `production`

5. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy your application
   - Your site will be available at `https://your-app-name.onrender.com`

## Configuration Details

The `render.yaml` file includes:
- **Build Command**: Installs dependencies and builds the Next.js app
- **Start Command**: Starts the production server
- **Health Check**: Configured to check the root path
- **Environment**: Node.js with production settings

## Post-Deployment

1. **Custom Domain** (Optional)
   - Go to your service settings
   - Add your custom domain
   - Update DNS records as instructed

2. **Environment Variables**
   - Add any API keys or secrets in the Environment tab
   - These are kept secure and not exposed in your code

3. **Auto-Deploy**
   - By default, Render auto-deploys on every push to your main branch
   - You can configure this in the service settings

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### App Won't Start
- Check start command is correct: `npm start`
- Verify the build completed successfully
- Check application logs for errors

### Environment Variables
- Make sure all required env vars are set in Render dashboard
- Restart the service after adding new variables

## Free Tier Limitations

- Services may spin down after 15 minutes of inactivity
- First request after spin-down may be slow (cold start)
- Consider upgrading to a paid plan for always-on service

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)

