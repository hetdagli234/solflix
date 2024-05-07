use anchor_lang::prelude::*;

declare_id!("Shkocj4AXvfst7fWgnencNW6WeCJdxTp7cuEDgfrg39");

#[program]
pub mod solflix {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
